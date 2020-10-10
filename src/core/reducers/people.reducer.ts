import peopleActionTypes from "core/action-types/people.actionTypes"
import createReducer, { Action } from "core/factories/createReducer.factory"
import IPeople from "core/types/IPeople"

export interface IPeopleSearchResult {
	[key: string]: Array<IPeople>
}

export interface IPeopleStore {
	searchResult: IPeopleSearchResult | null
}

const initialState = {
	searchResult: null,
}

export function setPeople(state: IPeopleStore, { payload }: Action<IPeopleSearchResult>) {
	return {
		...state,
		searchResult: {
			...state.searchResult,
			...payload,
		},
	}
}

export default createReducer(initialState, {
	[peopleActionTypes.GET_PEOPLE_SUCCESS]: setPeople,
})
