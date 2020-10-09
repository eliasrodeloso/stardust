import errorSelector from "core/selectors/error.selector"
import { useSelector } from "react-redux"

export interface IFeedbackMessagesStore {
	message: string | null
	variant: "error" | "info"
	open: boolean
	type: string | null
}

export default function useFeedbackMessageStore(): IFeedbackMessagesStore {
	const actions = ["FETCH_LOG_IN_USER"]
	const [currentAction, message] = useSelector(errorSelector(actions))
	return {
		message,
		variant: Boolean(message) ? "error" : "info",
		open: Boolean(message),
		type: currentAction,
	}
}
