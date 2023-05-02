import inquirer from 'inquirer';
import { spawnSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';

const apps = readdirSync('apps');

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
    spawnSync("npm", ["run", "pages:dev"], {
        cwd: join('apps', app),
        stdio: "inherit",
      });
  });