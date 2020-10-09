import { call, put, takeLatest } from "redux-saga/effects"

import actionFactory from "core/factories/action.factory"
import PlanetsService from "core/services/planets/planets.service"
import planetActionTypes from "core/action-types/planets.actionTypes"

function* getPlanets(data: { type: typeof planetActionTypes.GET_PLANETS_REQUEST; payload: any }) {
	try {
		const response = yield call(PlanetsService.getPlanets, data.payload)
		yield put(actionFactory(planetActionTypes.GET_PLANETS_SUCCESS, response.data.results))
	} catch (error) {
		yield put(actionFactory(planetActionTypes.GET_PLANETS_FAILURE, error))
	}
}

export default function* watchGetCharacters() {
	yield takeLatest(planetActionTypes.GET_PLANETS_REQUEST, getPlanets)
}
