import { useSelector } from "react-redux"

import peopleSelectors from "core/selectors/people.selector"
import IPeople from "core/types/IPeople"
import filmsSelectors from "core/selectors/films.selector"
import IFilm from "core/types/IMovie"

export interface IPlanetRelatedStore {
	people: Array<IPeople> | null
	films: Array<IFilm> | null
}

export default function usePlanetRelatedStore(planetId: string): IPlanetRelatedStore {
	return {
		people: useSelector(peopleSelectors.getPeopleForPlanet(planetId)),
		films: useSelector(filmsSelectors.getFilmsForPlanet(planetId)),
	}
}
