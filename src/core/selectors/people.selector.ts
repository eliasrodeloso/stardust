import { IReduxState } from "core/reducers"

function getPeopleForPlanet(planetId: string) {
	return (state: IReduxState) => {
		const { peopleStore } = state
		if (peopleStore && peopleStore.searchResult) {
			return peopleStore?.searchResult[planetId]
		}
		return null
	}
}

const peopleSelectors = {
	getPeopleForPlanet,
}

export default peopleSelectors
