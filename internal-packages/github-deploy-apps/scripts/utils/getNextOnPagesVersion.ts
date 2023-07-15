import { getEnvVar } from './getEnvVar';

export function getNextOnPagesVersionToUse(): string|undefined {

    // // FOR DEVELOPMENT
    // if(true === true) {
    //  return 'latest';
    // }
    // //

	return getEnvVar('NEXT_ON_PAGES_VERSION');
}
