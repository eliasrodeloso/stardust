import planetActionTypes from "core/action-types/planets.actionTypes"
import createReducer, { Action } from "core/factories/createReducer.factory"
import { IPlanet } from "core/types/IPlanet"

export interface IPlanetsStore {
	searchResult: Array<IPlanet> | null
}

const initialState: IPlanetsStore = {
	searchResult: null,
}

export function setCharacters(state: IPlanetsStore, { payload }: Action<Array<IPlanet>>) {
	return {
		...state,
		searchResult: [...payload],
	}
}

const reducer = createReducer(initialState, {
	[planetActionTypes.GET_PLANETS_SUCCESS]: setCharacters,
})

export default reducer
