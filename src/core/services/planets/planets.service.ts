import axiosInstance from "config/axios.config"

export default class PlanetsService {
	static getPlanets(params: any) {
		return axiosInstance.get("/planets/", {
			params,
		})
	}
}
