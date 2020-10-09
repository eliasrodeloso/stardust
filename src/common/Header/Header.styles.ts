import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

export default makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		appBar: {
			flexGrow: 1,
			zIndex: theme.zIndex.drawer + 1,
		},
	})
)
