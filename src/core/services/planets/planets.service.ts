// import axiosInstance from "config/axios.config"
import planets from "./planets.json"

export default class PlanetsService {
	static getPlanets(params: any) {
		// return axiosInstance.get("/planets/", {
		// 	params,
		// })
		return new Promise((resolve, reject) => {
			const planetsMapped = planets.map((item) => ({
				url: `https://swapi.dev/api/planets/${item.pk}/`,
				...item.fields,
			}))
			const result = { data: { results: planetsMapped } }
			resolve(result)
		})
	}
}
