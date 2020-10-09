import { combineReducers } from "redux"

import planetsReducer, { IPlanetsStore } from "core/reducers/planets.reducer"

import loadingReducer from "./loading.reducer"
import errorReducer from "./error.reducer"

export interface IReduxState {
	loadingStore: object
	errorStore: object
	planetsStore: IPlanetsStore
}

const combinedReducers = combineReducers({
	loadingStore: loadingReducer,
	errorStore: errorReducer,
	planetsStore: planetsReducer,
})

export default combinedReducers
