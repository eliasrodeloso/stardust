import { IReduxState } from "core/reducers"

function getFilmsForPlanet(planetId: string) {
	return (state: IReduxState) => {
		const { filmsStore } = state
		if (filmsStore && filmsStore.searchResult) {
			return filmsStore?.searchResult[planetId]
		}
		return null
	}
}

const filmsSelectors = {
	getFilmsForPlanet,
}

export default filmsSelectors
