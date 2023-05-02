import inquirer from 'inquirer';
import { spawnSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';

const apps = readdirSync('apps');

const devArgs = process.argv.slice(2)

inquirer
  .prompt([
    {
      type: 'list',
      name: 'app',
      message: 'Which app do you want to start?',
      choices: [...apps],
    },
  ])
  .then(({ app }) => {
    spawnSync("npm", ["run", "pages:dev", "--", ...devArgs], {
        cwd: join('apps', app),
        stdio: "inherit",
      });
  });