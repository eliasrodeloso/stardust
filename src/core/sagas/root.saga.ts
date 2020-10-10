import { all } from "redux-saga/effects"

import planetsSagas from "./planets.saga"
import peopleSagas from "./people.saga"
import filmsSagas from "./films.saga"

export default function* rootSaga() {
	yield all([planetsSagas(), peopleSagas(), filmsSagas()])
}
