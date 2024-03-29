import { readdirSync } from 'fs';
import { join } from 'path';
import { spawnSync } from 'child_process';
import inquirer from 'inquirer';

const script = process.argv[2];


if(!['nop', 'nopm'].includes(script)) {
  console.error(`\x1b[31m Error: only "nop" and "nopm" scripts are allowed but got "${script}" instead \x1b[0m`);
  process.exit(1);
}

const buildOptionsStr = process.env['NOP_MONOREPO_BUILD_OPTIONS'];

const buildOptions = buildOptionsStr && JSON.parse(buildOptionsStr);

const skipInteractivity = !!buildOptions;

const allApps = readdirSync('apps');

if(!skipInteractivity){
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
      runMainBuildLogic(app, deploy);
    });
} else {
  const { app, deploy, projectName } = buildOptions;
  runMainBuildLogic(app, deploy, projectName);
}


function runMainBuildLogic(app, deploy, projectName) {
  const buildsDeployments = [];
  const failedBuilds = [];
  const failedDeployments = [];

  if (app !== 'all') {
    const { status: buildStatus } = buildApp(app);
    if (buildStatus !== 0) {
      failedBuilds.push(app);
    } else {
      if (deploy) {
        const { status: deployStatus, deploymentUrl } = deployApp(app, projectName);
        if (deployStatus !== 0) {
          failedDeployments.push(app);
        } else {
          buildsDeployments.push({
            app,
            deploymentUrl
          });
        }
      } else {
        buildsDeployments.push({app});
      }
    }
  } else {
    const appsToExclude = [
      // the complex-ish-app takes ages to build and it can't run on a non paid workers
      // plan so let's skip it when running all the apps
      'complex-ish-app'
    ];
    const apps = allApps.filter(app => !appsToExclude.includes(app));

    const numOfApps = `${apps.length}`.padStart(2, '0');

    apps.forEach((app, idx) => {
      const appNum = `${idx + 1}`.padStart(2, '0');
      const appMessage = `================    ${app}   (app ${appNum} of ${numOfApps})    ================`;
      const decoration = new Array(appMessage.length).fill('=').join('');

      console.log(`\x1b[34m ${decoration} \x1b[0m`);
      console.log(`\x1b[34m ${appMessage} \x1b[0m`);
      console.log(`\x1b[34m ${decoration} \x1b[0m`);

      console.log('');

      const { status: buildStatus } = buildApp(app);

      if (buildStatus !== 0) {
        failedBuilds.push(app);
        return;
      }

      if (deploy) {
        const { status: deployStatus, deploymentUrl } = deployApp(app, projectName);

        if (deployStatus !== 0) {
          failedDeployments.push(app);
        } else {
          buildsDeployments.push({
            app,
            deploymentUrl
          });
        }
      } else {
        buildsDeployments.push({app});
      }

      console.log('\n\n\n\n\n\n\n\n\n\n');
    });
  }

  printSummary(deploy, buildsDeployments, failedBuilds, failedDeployments);

  if(failedBuilds.length + failedDeployments.length > 0) {
    // if there is at least a failure lets exit with a non 0 exit code
    process.exit(1);
  }

  console.log('\n\n');
}

function buildApp(app) {
  const nopArgs = process.argv.slice(3);
  const buildArgs = nopArgs.length > 0 ? ['--', '--'].concat(process.argv.slice(3)) : [];

  return spawnSync("npm", ["run", script, ...buildArgs], {
    cwd: join('apps', app),
    stdio: "inherit",
  });
}

function deployApp(app, projectName) {
  console.log('\n\nDeploying app...');

  const spawnResult = spawnSync("npm", ["run", "pages:dep", '--', ...( projectName ? [`--project-name="${projectName}"`] : [] )], {
    cwd: join('apps', app),
    stdio: "pipe",
  });

  console.log(spawnResult.output.toString());

  const match = spawnResult.output.toString().match(/Deployment complete! Take a peek over at (.*)/);

  let deploymentUrl = '- URL NOT DETECTED -';
  if(match?.length === 2) {
    deploymentUrl = match[1];
  }

  return {
    status: spawnResult.status,
    deploymentUrl,
  }
}

function printSummary (deploy, buildsDeployments, failedBuilds, failedDeployments) {
  console.log('\n'.repeat(10));
  const message = `===============================  Summary  ===============================`;
  const decoration = new Array(message.length).fill('=').join('');
  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
  console.log(`\x1b[30m\x1b[46m ${message} \x1b[0m`);
  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);

  console.log('');

  if(buildsDeployments.length) {
    console.log(`The following apps have been successfully built ${deploy ? 'and deployed' : ''}:`);
    buildsDeployments.forEach(({app, deploymentUrl}) => {
      console.log(` - ${app} ${deploy ? `deployed at ${deploymentUrl}` : ''}`);
    });
    console.log('');
  }

  if(failedBuilds.length) {
    console.log(`\x1b[31mThe following apps have been failed build:\x1b[0m`);
    failedBuilds.forEach(app => {
      console.log(`\x1b[31m - ${app}\x1b[0m`);
    });
    console.log('');
  }


  if(failedDeployments.length) {
    console.log(`\x1b[31mThe following apps have been failed deployment:\x1b[0m`);
    failedDeployments.forEach(app => {
      console.log(`\x1b[31m - ${app}\x1b[0m`);
    });
    console.log('');
  }

  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
  console.log(`\x1b[30m\x1b[46m ${decoration} \x1b[0m`);
}
