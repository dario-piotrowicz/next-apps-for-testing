import { readdirSync } from 'fs';
import { join } from 'path';
import { spawnSync } from 'child_process';
import inquirer from 'inquirer';

const script = process.argv[2];


if(!['nop', 'nopm'].includes(script)) {
  console.error(`\x1b[31m Error: only "nop" and "nopm" scripts are allowed but got "${script}" instead \x1b[0m`);
  process.exit(1);
}

const buildArgs = ['--'].concat(process.argv.slice(3));

const allApps = readdirSync('apps');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'app',
      message: 'Which app do you want to build?',
      choices: ['all', new inquirer.Separator(), ...allApps],
    },
    {
      type: 'confirm',
      name: 'deploy',
      message: 'do you also want to deploy?',
      default: false
    },
  ])
  .then(({ app, deploy }) => {
    if ( app !== 'all' ) {
      const { status: buildStatus } = buildApp(app);
      if (buildStatus !== 0) {
        console.error(`\x1b[31m Failed build! \x1b[0m`);
        process.exit(buildStatus);
      } 
      if(deploy){
        deployApp(app);
      }
    } else {
        // apps that don't currently build
        const appsFailingBuild = [
            // the build for dynamic-static-app-dir-13.2.4 is broken for some reason, I'll need to investigate and fix it
            "dynamic-static-app-dir-13.2.4",
            // simple-app-dir-13.4.1-server-actions used the `getRequestCfProperties` and
            // `getRequestExecutionContext` from `@cloudflare/next-on-pages/utils` that is
            // not merged and we'll probably won't go forward with it
            "simple-app-dir-13.4.1-server-actions",
        ];

        const apps = allApps.filter(app => !appsFailingBuild.includes(app));

        const numOfApps = `${apps.length}`.padStart(2, '0');

        apps.forEach((app, idx) => {
            const appNum = `${idx+1}`.padStart(2, '0')
            const appMessage =      `================    ${app}   (app ${appNum} of ${numOfApps})    ================`;
            const decoration = new Array(appMessage.length).fill('=').join('');
        
            console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
            console.log(`\x1b[30m\x1b[46m ${appMessage} \x1b[0m`);
            console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
            console.log('');

            const { status: buildStatus } = buildApp(app);

            if (buildStatus !== 0) {
                console.error('\x1b[31m'+
                    `\n ${decoration}` +
                    `\n ${decoration}` +
                    `\n ${decoration}` +
                    '\n ⚠️⚠️⚠️⚠️ ERROR ⚠️⚠️⚠️⚠️' +
                    `\n app ${app} failed build, aborting!` +
                    `\n ${decoration}` +
                    `\n ${decoration}` +
                    `\n ${decoration}` +
                '\x1b[0m');
                process.exit(buildStatus);
            }

            if(deploy){
              const { status: deployStatus } = deployApp(app);

              if (deployStatus !== 0) {
                  console.error('\x1b[31m'+
                      `\n ${decoration}` +
                      `\n ${decoration}` +
                      `\n ${decoration}` +
                      '\n ⚠️⚠️⚠️⚠️ ERROR ⚠️⚠️⚠️⚠️' +
                      `\n app ${app} failed deployment, aborting!` +
                      `\n ${decoration}` +
                      `\n ${decoration}` +
                      `\n ${decoration}` +
                  '\x1b[0m');
                  process.exit(deployStatus);
              }
            }

            console.log('\n\n\n\n\n\n\n\n\n\n');
        })
    }
  });

function buildApp(app) {
  return spawnSync("npm", ["run", script, '--', ...buildArgs], {
    cwd: join('apps', app),
    stdio: "inherit",
  });
}

function deployApp(app) {
  return spawnSync("npm", ["run", "pages:dep"], {
    cwd: join('apps', app),
    stdio: "inherit",
  });
}