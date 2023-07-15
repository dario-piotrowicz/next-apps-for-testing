import { getEnvVar } from './getEnvVar';

export function getAppToDeploy(): string|undefined {

    // // FOR DEVELOPMENT
    // if(true === true) {
    //  return 'simple-app-dir-13.0.0';
    // }
    // //

	return getEnvVar('APP');
}
