import planetActionTypes from "core/action-types/planets.actionTypes"
import { IFilters, TSortValue } from "core/context/Filters.context"
import createReducer, { Action } from "core/factories/createReducer.factory"
import IPlanet from "core/types/IPlanet"

export interface IPlanetsStore {
	searchResult: Array<IPlanet> | null
}

const initialState: IPlanetsStore = {
	searchResult: null,
}

export function setPlanets(state: IPlanetsStore, { payload }: Action<Array<IPlanet>>) {
	return {
		...state,
		searchResult: [...payload],
	}
}

export function sortBy(state: IPlanetsStore, { payload }: Action<IFilters>) {
	const { searchResult } = state
	const { sort: filterSort, order } = payload
	const sort: TSortValue = filterSort === "planetName" ? "name" : filterSort

	const sortedSearchResult = searchResult?.sort((itemA: IPlanet, itemB: IPlanet) => {
		const attrB: string = itemB[sort] as string
		const attrA: string = itemA[sort] as string

		if (order === "asc") {
			return attrB.localeCompare(attrA)
		}

		if (order === "desc") {
			return attrA.localeCompare(attrB)
		}

		return 0
	})

	return {
		...state,
		searchResult: sortedSearchResult,
	}
}

const reducer = createReducer(initialState, {
	[planetActionTypes.GET_PLANETS_SUCCESS]: setPlanets,
})

export default reducer
