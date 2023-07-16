import { getEnvVar } from './getEnvVar.ts';

export function getAppToDeploy(): string|undefined {
	return getEnvVar('APP');
}
