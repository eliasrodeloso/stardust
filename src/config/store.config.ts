import { compose, createStore, applyMiddleware, AnyAction, Store } from "redux"
import createSagaMiddleware from "redux-saga"

import reducers, { IReduxState } from "core/reducers"
import currentEnv from "config/constants/environment.constants"
import rootSaga from "core/sagas/root.saga"

let store: Store<IReduxState, AnyAction> // eslint-disable-line

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = compose(applyMiddleware(sagaMiddleware))(createStore)

if (currentEnv.NODE_ENV === "development") {
	store = createStore(
		reducers,
		compose(
			applyMiddleware(sagaMiddleware),
			(window as any).__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line
				? (window as any).__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
				: (func: any) => func
		)
	)
} else {
	store = createStoreWithMiddleware(reducers)
}

sagaMiddleware.run(rootSaga)

export default store
