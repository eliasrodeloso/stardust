import { call, put, takeLatest } from "redux-saga/effects"
import { AxiosResponse } from "axios"

import actionFactory from "core/factories/action.factory"
import PeopleService from "core/services/people/people.service"
import peopleActionTypes from "core/action-types/people.actionTypes"
import getIdsFromUrls from "core/factories/getIdsFromUrl"

function* getPeople(data: {
	type: typeof peopleActionTypes.SCOPED_GET_PEOPLE_REQUEST
	payload: { urls: Array<string>; identifier: string }
}) {
	const { urls, identifier } = data.payload
	try {
		const ids = getIdsFromUrls(urls)
		const responses = yield call(PeopleService.getPeople, ids)
		yield put(
			actionFactory(peopleActionTypes.SCOPED_GET_PEOPLE_SUCCESS, {
				identifier,
				data: responses.map((response: AxiosResponse) => response.data),
			})
		)
	} catch (error) {
		yield put(actionFactory(peopleActionTypes.SCOPED_GET_PEOPLE_FAILURE, { identifier, error }))
	}
}

export default function* watchGetPeople() {
	yield takeLatest(peopleActionTypes.SCOPED_GET_PEOPLE_REQUEST, getPeople)
}
