import { useSelector } from "react-redux"

import filmsSelectors from "core/selectors/films.selector"
import IFilm from "core/types/IMovie"
import { scopedLoadingSelector } from "core/selectors/loading.selector"

export interface IPlanetFilmsStore {
	films: Array<IFilm> | null
	isLoadingFilms: boolean
}

export default function usePlanetFilmsStore(planetId: string): IPlanetFilmsStore {
	return {
		films: useSelector(filmsSelectors.getFilmsForPlanet(planetId)),
		isLoadingFilms: useSelector(scopedLoadingSelector({ SCOPED_GET_FILMS: planetId })),
	}
}
