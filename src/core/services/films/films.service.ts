import axiosInstance from "config/axios.config"

export default class FilmService {
	/**
	 * Get a film on the database
	 *
	 * @param {String | Number} id id of the film to get
	 * @returns {Promise} Promise of film
	 */
	static getFilmById(id: string | number) {
		return axiosInstance.get(`/films/${id}`)
	}

	/**
	 * Get all films
	 *
	 * If an array of ids is supplied, then it will returns an array of promises
	 * if not, then it will returns a promise af all the films
	 *
	 * @param {Array<string | number>} ids optional, array of the ids to get
	 * @returns {Array<Promise> | Promise} Array of Promise or a Promise
	 */
	static getFilms(ids?: Array<string | number>) {
		if (ids?.length) {
			return Promise.all(ids.map((id: string | number) => FilmService.getFilmById(id)))
		}

		return axiosInstance.get("/films")
	}
}
