import { IReduxState } from "core/reducers"

function getPlanets(state: IReduxState) {
	return state.planetsStore.searchResult
}

export default {
	getPlanets,
}
