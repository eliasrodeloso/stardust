import filmActionTypes from "core/action-types/films.actionTypes"
import createReducer, { Action } from "core/factories/createReducer.factory"
import IFilm from "core/types/IMovie"

export interface IFilmsSearchResult {
	[key: string]: Array<IFilm>
}

export interface IFilmsStore {
	searchResult: IFilmsSearchResult | null
}

const initialState = {
	searchResult: null,
}

export function setFilms(state: IFilmsStore, { payload }: Action<IFilmsSearchResult>) {
	return {
		...state,
		searchResult: {
			...state.searchResult,
			...payload,
		},
	}
}

export default createReducer(initialState, {
	[filmActionTypes.GET_FILMS_SUCCESS]: setFilms,
})
