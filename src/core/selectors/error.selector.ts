/**
 * Selector to get the messages sent to the store and taken to
 * be shown to the user
 *
 * @param {array} actions actions to be watched from the store
 */

export default function errorSelector(actions: string[]): (state: any) => [string | null, string | null] {
	return (state) => {
		let currentAction = null
		let message = null
		actions.forEach((action) => {
			if (state.errorStore[action]) {
				currentAction = action
				message = state.errorStore[action]
			}
		})
		return [currentAction, message]
	}
}
