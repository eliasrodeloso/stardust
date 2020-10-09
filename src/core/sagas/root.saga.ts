import { all } from "redux-saga/effects"

import planetsSagas from "./planets.saga"

export default function* rootSaga() {
	yield all([planetsSagas()])
}
