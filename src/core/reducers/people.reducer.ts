import peopleActionTypes from "core/action-types/people.actionTypes"
import createReducer, { Action } from "core/factories/createReducer.factory"
import IPeople from "core/types/IPeople"

export interface IPeopleSearchResult {
	[key: string]: Array<IPeople>
}

export interface IPeopleStore {
	searchResult: IPeopleSearchResult
}

const initialState = {
	searchResult: {},
}

export function setPeople(state: IPeopleStore, { payload }: Action<{ identifier: string; data: Array<IPeople> }>) {
	return {
		...state,
		searchResult: {
			...state.searchResult,
			[payload.identifier]: payload.data,
		},
	}
}

export default createReducer(initialState, {
	[peopleActionTypes.SCOPED_GET_PEOPLE_SUCCESS]: setPeople,
})
