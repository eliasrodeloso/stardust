const envConstants = {
	development: {
		NODE_ENV: process.env.NODE_ENV,
		API_URL: "https://swapi.dev/api",
	},
	production: {
		NODE_ENV: process.env.NODE_ENV,
		API_URL: "https://swapi.dev/api",
	},
}

// @ts-ignore
const currentEnv = envConstants[process.env.NODE_ENV] ? envConstants[process.env.NODE_ENV] : envConstants.development

export default currentEnv
