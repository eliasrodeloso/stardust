import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const drawerWidth = 260

export default makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			[theme.breakpoints.up("md")]: {
				width: drawerWidth,
				flexShrink: 0,
			},
		},
		toolbar: theme.mixins.toolbar,
		drawerPaper: {
			width: drawerWidth,
		},
	})
)
