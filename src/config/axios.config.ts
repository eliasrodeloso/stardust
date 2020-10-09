import axios from "axios"

import env from "./constants/environment.constants"

/**
 * Axios client to use the Alegra API services
 */
const axiosInstance = axios.create({
	baseURL: env.API_URL,
	headers: {
		"Content-Type": "application/json",
	},
})

export default axiosInstance
