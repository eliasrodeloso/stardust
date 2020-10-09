/**
 * Create reducer, this is boiler plate code to reduce
 * complexity on the reducers, we don't want to have a 200
 * lines of code of switch.
 *
 * @param {Object} initialState Initial state for the reducer
 * @param {Object} handlers containing key, pair values of the
 * actions (key) and the function to reduce (pair)
 */

export interface Action<P = never> {
	type: string
	payload: P | any
}

export type Handler<S> = (state: S, action: Action) => S

export type Handlers<S> = {
	[type: string]: Handler<S>
}

export default function createReducer<S>(initialState: S, handlers: Handlers<S>) {
	return function reducer(state: S = initialState, action: Action) {
		if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
			return handlers[action.type](state, action)
		}
		return state
	}
}
