import { fromGithubAction } from "./utils/fromGithubAction.ts";
import { setOutput } from '@actions/core';
import { getAppToDeploy } from "./utils/getAppToDeploy.ts";
import shallac from 'shellac';

void (async function (): Promise<void> {
	const app = getAppToDeploy();

	console.log(`\x1b[35m 
		The app to deploy is..... ${app}
	\x1b[0m`);
	
	if(!app) {
		throw new Error('Error! App not defined!');
	}

	await runBuildAndDeployScript(app);

	if (fromGithubAction()) {
		setOutput('output', '...');
	}
})();

async function runBuildAndDeployScript(app: string): Promise<void> {
	await shallac`
		$ export CLOUDFLARE_API_TOKEN='${process.env['CLOUDFLARE_API_TOKEN']}'

		$ export NOP_MONOREPO_BUILD_OPTIONS='{ "app": "${app}", "deploy": true, "projectName": "${process.env['PROJECT_NAME']}" }'

		$$ cd ../.. && npm run nop
	`;
}