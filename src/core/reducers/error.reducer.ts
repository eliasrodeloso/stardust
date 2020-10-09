type ErrorState<P, S> =
	| S
	| {
			[type: string]: P
	  }

export default function errorReducer<
	S extends object = {},
	A extends { type: string; payload: any } = { type: ""; payload: "" }
>(state?: S, action?: A): ErrorState<A, S> {
	const matches = /(.*)_(FAILURE)/.exec(action ? action.type : "")

	if (!matches) return state || {}

	const [, requestName] = matches
	return {
		...state,
		[requestName]: action ? action.payload : "",
	}
}
