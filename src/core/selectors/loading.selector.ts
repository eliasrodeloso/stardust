import { IReduxState } from "core/reducers"
import lodash from "lodash"

export default function loadingSelector(actions: string[]): (state: any) => boolean {
	return (state) => {
		// returns true only when all actions is not loading
		return lodash(actions).some((action: string) => lodash.get(state, `loadingStore.${action}`))
	}
}

/**
 * Loading selector to select the scope based on the actions sent
 *
 * @param {Object} actionsObject object with different actions and identifiers in
 * the form of {[actionName]: identifier}
 * @returns {undefined | false | true} the final result of loading
 */
export function scopedLoadingSelector(actionsObject: { [key: string]: any }) {
	return (state: IReduxState) => {
		let finalLoadingResult
		const actions = Object.keys(actionsObject)

		for (const action of actions) {
			const loadingActionResult = lodash.get(state, `scopedLoadingStore.${action}`)

			finalLoadingResult = loadingActionResult

			if (loadingActionResult) {
				const scope = loadingActionResult[actionsObject[action]]
				finalLoadingResult = scope
				break
			}
		}

		return finalLoadingResult
	}
}
