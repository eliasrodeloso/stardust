import { call, put, takeLatest } from "redux-saga/effects"

import actionFactory from "core/factories/action.factory"
import filmsActionTypes from "core/action-types/films.actionTypes"
import getIdsFromUrls from "core/factories/getIdsFromUrl"
import FilmService from "core/services/films/films.service"
import { AxiosResponse } from "axios"

function* getFilms(data: {
	type: typeof filmsActionTypes.GET_FILMS_REQUEST
	payload: { urls: Array<string>; planetId: string }
}) {
	try {
		const { urls, planetId } = data.payload
		const ids = getIdsFromUrls(urls)
		const responses = yield call(FilmService.getFilms, ids)
		yield put(
			actionFactory(filmsActionTypes.GET_FILMS_SUCCESS, {
				[planetId]: responses.map((response: AxiosResponse) => response.data),
			})
		)
	} catch (error) {
		yield put(actionFactory(filmsActionTypes.GET_FILMS_FAILURE, error))
	}
}

export default function* watchGetFilms() {
	yield takeLatest(filmsActionTypes.GET_FILMS_REQUEST, getFilms)
}
