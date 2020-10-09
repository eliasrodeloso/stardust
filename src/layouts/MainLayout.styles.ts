import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

export default makeStyles((theme: Theme) =>
	createStyles({
		main: {
			flexGrow: 1,
			padding: theme.spacing(1, 3),
		},
		toolbar: theme.mixins.toolbar,
		root: {
			minHeight: "100vh",
			display: "flex",
		},
		content: {
			height: "100%",
			marginTop: `-${theme.mixins.toolbar.minHeight}px`,
			paddingTop: `${theme.mixins.toolbar.minHeight}px`,
		},
	})
)
