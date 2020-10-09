import lodash from "lodash"

export default function loadingSelector(actions: string[]): (state: any) => boolean {
	return (state) => {
		// returns true only when all actions is not loading
		return lodash(actions).some((action: string) => lodash.get(state, `loadingStore.${action}`))
	}
}
