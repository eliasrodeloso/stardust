import { useSelector } from "react-redux"

import loadingSelector from "core/selectors/loading.selector"
import planetsSelector from "core/selectors/planets.selector"

export default function usePlanetsStore() {
	return {
		isLoading: useSelector(loadingSelector(["GET_PLANETS"])),
		planets: useSelector(planetsSelector.getPlanets),
	}
}
