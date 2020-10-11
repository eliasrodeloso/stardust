import { combineReducers } from "redux"

import planetsReducer, { IPlanetsStore } from "core/reducers/planets.reducer"
import peopleReducer, { IPeopleStore } from "core/reducers/people.reducer"
import filmsReducer, { IFilmsStore } from "core/reducers/films.reducer"

import loadingReducer, { scopedLoadingReducer } from "./loading.reducer"
import errorReducer from "./error.reducer"

export interface IReduxState {
	loadingStore: object
	scopedLoadingStore: object
	errorStore: object
	planetsStore: IPlanetsStore
	peopleStore: IPeopleStore
	filmsStore: IFilmsStore
}

const combinedReducers = combineReducers({
	loadingStore: loadingReducer,
	scopedLoadingStore: scopedLoadingReducer,
	errorStore: errorReducer,
	planetsStore: planetsReducer,
	peopleStore: peopleReducer,
	filmsStore: filmsReducer,
})

export default combinedReducers
