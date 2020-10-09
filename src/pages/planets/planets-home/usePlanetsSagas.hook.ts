import { useDispatch } from "react-redux"

import planetActionTypes from "core/action-types/planets.actionTypes"
import actionFactory from "core/factories/action.factory"

export default function usePlanetsSagas() {
	const dispatch = useDispatch()
	return {
		getPlanets: (params: any) => dispatch(actionFactory(planetActionTypes.GET_PLANETS_REQUEST, params)),
	}
}
