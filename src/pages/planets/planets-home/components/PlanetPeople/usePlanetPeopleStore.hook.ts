import { useSelector } from "react-redux"

import peopleSelectors from "core/selectors/people.selector"
import IPeople from "core/types/IPeople"
import { scopedLoadingSelector } from "core/selectors/loading.selector"

export interface IPlanetPeopleStore {
	people: Array<IPeople> | null
	isLoadingPeople: boolean
}

export default function usePlanetPeopleStore(planetId: string): IPlanetPeopleStore {
	return {
		people: useSelector(peopleSelectors.getPeopleForPlanet(planetId)),
		isLoadingPeople: useSelector(scopedLoadingSelector({ SCOPED_GET_PEOPLE: planetId })),
	}
}
