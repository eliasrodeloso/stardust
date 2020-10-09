import React from "react"
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core"
import { Error as ErrorIcon, Info as InfoIcon, Close as CloseIcon } from "@material-ui/icons/"
import clsx from "classnames"

import useFeedbackMessageStore from "common/FeedbackMessages/useFeedbackMessageStore.hook"
import useFeedbackMessageActions from "common/FeedbackMessages/useFeedbackMessageActions.hook"

import useStyles from "./FeedbackMessage.styles"

const variantIcon = {
	error: ErrorIcon,
	info: InfoIcon,
}

export default function FeedbackMessages() {
	const store = useFeedbackMessageStore()
	const actions = useFeedbackMessageActions()
	const classes = useStyles()

	const handleClose = () => {
		actions.clearError(store.type)
	}

	const Icon = variantIcon[store.variant]
	return (
		<Snackbar
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={store.open}
			onClose={handleClose}
		>
			<SnackbarContent
				className={classes[store.variant]}
				message={
					<span id="client-snackbar" className={classes.message}>
						<Icon className={clsx(classes.icon, classes.iconVariant)} />
						{store.message}
					</span>
				}
				action={[
					<IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
						<CloseIcon className={classes.icon} />
					</IconButton>,
				]}
			/>
		</Snackbar>
	)
}
