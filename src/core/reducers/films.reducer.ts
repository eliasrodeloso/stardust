import filmActionTypes from "core/action-types/films.actionTypes"
import createReducer, { Action } from "core/factories/createReducer.factory"
import IFilm from "core/types/IMovie"

export interface IFilmsSearchResult {
	[key: string]: Array<IFilm>
}

export interface IFilmsStore {
	searchResult: IFilmsSearchResult
}

const initialState = {
	searchResult: {},
}

export function setFilms(state: IFilmsStore, { payload }: Action<{ identifier: string; data: Array<IFilm> }>) {
	return {
		...state,
		searchResult: {
			...state.searchResult,
			[payload.identifier]: payload.data,
		},
	}
}

export default createReducer(initialState, {
	[filmActionTypes.SCOPED_GET_FILMS_SUCCESS]: setFilms,
})
