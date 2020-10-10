import { call, put, takeLatest } from "redux-saga/effects"
import { AxiosResponse } from "axios"

import actionFactory from "core/factories/action.factory"
import PeopleService from "core/services/people/people.service"
import peopleActionTypes from "core/action-types/people.actionTypes"
import getIdsFromUrls from "core/factories/getIdsFromUrl"

function* getPeople(data: {
	type: typeof peopleActionTypes.GET_PEOPLE_REQUEST
	payload: { urls: Array<string>; planetId: string }
}) {
	try {
		const { urls, planetId } = data.payload
		const ids = getIdsFromUrls(urls)
		const responses = yield call(PeopleService.getPeople, ids)
		yield put(
			actionFactory(peopleActionTypes.GET_PEOPLE_SUCCESS, {
				[planetId]: responses.map((response: AxiosResponse) => response.data),
			})
		)
	} catch (error) {
		yield put(actionFactory(peopleActionTypes.GET_PEOPLE_FAILURE, error))
	}
}

export default function* watchGetPeople() {
	yield takeLatest(peopleActionTypes.GET_PEOPLE_REQUEST, getPeople)
}
