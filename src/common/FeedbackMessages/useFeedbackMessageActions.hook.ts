import actionFactory from "core/factories/action.factory"
import { useDispatch } from "react-redux"

export default function useFeedbackMessageActions() {
	const dispatch = useDispatch()
	return {
		clearError: (actionType: string | null) => {
			if (actionType) {
				dispatch(actionFactory(`${actionType}_FAILURE`, null))
			}
		},
	}
}
