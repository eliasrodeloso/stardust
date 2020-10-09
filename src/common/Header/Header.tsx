import React from "react"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"

import useStyles from "./Header.styles"

interface AppHeaderProps {
	onMenuClick: () => void
}

export default function AppHeader(props: AppHeaderProps) {
	const { onMenuClick } = props
	const classes = useStyles()
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onMenuClick}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Stardust
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
