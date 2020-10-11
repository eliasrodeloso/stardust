// @ts-nocheck
import { IReduxState } from "core/reducers"

export default function loadingReducer(state: IReduxState, action: { type: string }) {
	const { type } = action
	const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)

	// not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
	if (!matches) return state || {}

	const [, requestName, requestState] = matches
	return {
		...state,
		// Store whether a request is happening at the moment or not
		// e.g. will be true when receiving GET_TODOS_REQUEST
		//      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
		[requestName]: requestState === "REQUEST",
	}
}

export function scopedLoadingReducer(state: any, action: { type: string; payload: any }) {
	const { type, payload } = action
	const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)
	const matchesScoped = /(SCOPED)_(.*)/.exec(type)

	// not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
	if (!matchesScoped) return state || {}

	const [, requestName, requestState] = matches

	return {
		...state,
		// Store whether a request is happening at the moment or not
		// e.g. will be true when receiving GET_TODOS_REQUEST
		//      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
		[requestName]: {
			...state[requestName],
			[payload.identifier]: requestState === "REQUEST",
		},
	}
}
