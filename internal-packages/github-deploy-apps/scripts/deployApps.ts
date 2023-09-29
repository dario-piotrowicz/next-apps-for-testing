import { getAppToDeploy } from "./utils/getAppToDeploy.ts";
import shallac from 'shellac';

void (async function (): Promise<void> {
	const app = getAppToDeploy();

	if(!app) {
		throw new Error('Error! App not defined!');
	}

	await runBuildAndDeployScript(app);
})();

async function runBuildAndDeployScript(app: string): Promise<void> {
	await shallac`
		$ export CLOUDFLARE_API_TOKEN='${process.env['CLOUDFLARE_API_TOKEN']}'

		$ export NOP_MONOREPO_BUILD_OPTIONS='{ "app": "${app}", "deploy": true, "projectName": "${process.env['PROJECT_NAME']}" }'

		$$ cd ../.. && pnpm run nop
	`;
}