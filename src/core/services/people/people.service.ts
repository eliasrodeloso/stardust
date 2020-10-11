import axiosInstance from "config/axios.config"

import people from "./people.json"

export default class PeopleService {
	/**
	 * Get a person on the database
	 *
	 * @param {String | Number} id id of the people to get
	 * @returns {Promise} Promise of people
	 */
	static getPeopleById(id: string | number) {
		// return axiosInstance.get(`/people/${id}/`)
		return new Promise((resolve, reject) => {
			const resident = people.find((item) => String(item.pk) === String(id))
			if (resident) {
				resolve({
					data: {
						url: `https://swapi.dev/api/people/${resident.pk}/`,
						...resident.fields,
					},
				})
			} else {
				reject(new Error("Resident not found"))
			}
		})
	}

	/**
	 * Get all people
	 *
	 * If an array of ids is supplied, then it will returns an array of promises
	 * if not, then it will returns a promise af all the people
	 *
	 * @param {Array<string | number>} ids optional, array of the ids to get
	 * @returns {Array<Promise> | Promise} Array of Promise or Promise
	 */
	static getPeople(ids?: Array<string | number>) {
		if (ids?.length) {
			return Promise.all(ids.map((id: string | number) => PeopleService.getPeopleById(id)))
		}

		return axiosInstance.get("/people/")
	}
}
