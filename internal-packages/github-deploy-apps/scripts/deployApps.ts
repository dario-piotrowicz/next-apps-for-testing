import { fromGithubAction } from "./utils";
import { setOutput } from '@actions/core';
import { getAppToDeploy } from "./utils/getAppToDeploy";
import { getNextOnPagesVersionToUse } from "./utils/getNextOnPagesVersion";

void (async function (): Promise<void> {

	const app = getAppToDeploy();
	const nopVersion = getNextOnPagesVersionToUse();

	console.log(`\x1b[35m 
		
		The app to deploy is..... ${app}

		and

		the next-on-pages version to use is..... ${nopVersion}
		
		
	\x1b[0m`);
	

	if (fromGithubAction()) {
		setOutput('output', '...');
	}
})();
