import { getEnvVar } from './getEnvVar.ts';

export function fromGithubAction(): boolean {
	return !!getEnvVar('GH_ACTION');
}
