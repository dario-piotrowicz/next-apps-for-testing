export function getEnvVar(variableName: string): string|undefined {
	return process.env[variableName];
}
