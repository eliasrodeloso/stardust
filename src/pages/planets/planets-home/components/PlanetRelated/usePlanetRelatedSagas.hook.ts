import { useDispatch } from "react-redux"

import peopleActionTypes from "core/action-types/people.actionTypes"
import actionFactory from "core/factories/action.factory"
import filmActionTypes from "core/action-types/films.actionTypes"

export default function usePlanetRelatedSagas() {
	const dispatch = useDispatch()
	return {
		getPeople: (urls: Array<string>, planetId: string) =>
			dispatch(actionFactory(peopleActionTypes.GET_PEOPLE_REQUEST, { planetId, urls })),
		getFilms: (urls: Array<string>, planetId: string) =>
			dispatch(actionFactory(filmActionTypes.GET_FILMS_REQUEST, { planetId, urls })),
	}
}
