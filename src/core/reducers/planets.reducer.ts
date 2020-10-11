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

export function sortBy(state: IPlanetsStore, { payload }: Action<IFilters>): IPlanetsStore {
	const { searchResult } = state
	const { sort: filterSort, order } = payload
	const sort: TSortValue = filterSort === "planetName" ? "name" : filterSort

	// usually I would get this from the BE to get all the information sorted
	let sortedSearchResult: Array<IPlanet> = []
	if (searchResult) {
		sortedSearchResult = searchResult?.sort((itemA: IPlanet, itemB: IPlanet) => {
			if (sort === "population") {
				if (order === "asc") {
					return Number(itemA.population) - Number(itemB.population)
				}
				return Number(itemB.population) - Number(itemA.population)
			} else {
				const attrB: string = itemB[sort] as string
				const attrA: string = itemA[sort] as string

				if (order === "asc") {
					return attrB.localeCompare(attrA)
				} else {
					return attrA.localeCompare(attrB)
				}
			}
		})
	}

	return {
		...state,
		searchResult: [...sortedSearchResult],
	}
}

const reducer = createReducer(initialState, {
	[planetActionTypes.GET_PLANETS_SUCCESS]: setPlanets,
	[planetActionTypes.SORT_PLANETS]: sortBy,
})

export default reducer
