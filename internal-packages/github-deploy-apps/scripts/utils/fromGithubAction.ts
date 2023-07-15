import { getEnvVar } from './getEnvVar';

export function fromGithubAction(): boolean {
	return !!getEnvVar('GH_ACTION');
}
