import React from "react"
import { Link, useLocation } from "@reach/router"
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon"
import { Hidden, Drawer, List, ListItemIcon, ListItem, ListItemText, SwipeableDrawer } from "@material-ui/core"

import { ReactComponent as PlanetsIcon } from "assets/icons/planets.svg"

import useStyles from "./Drawer.styles"

interface AppDrawerProps {
	open: boolean
	onCloseDrawer: () => void
	onOpenDrawer: () => void
}

const navigation = [
	{
		url: "/",
		title: "Planets",
		Icon: (props: any) => <SvgIcon component={PlanetsIcon} viewBox="0 0 16 16" {...props} />,
	},
]

export default function AppDrawer(props: AppDrawerProps) {
	const { open, onCloseDrawer, onOpenDrawer } = props
	const classes = useStyles()
	const location = useLocation()

	const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

	const items = navigation.map((item: any) => (
		<ListItem button component={Link} to={item.url} key={`${item.url}`} selected={location.pathname === item.url}>
			<ListItemIcon>
				<item.Icon />
			</ListItemIcon>
			<ListItemText primary={item.title} />
		</ListItem>
	))

	return (
		<nav className={classes.drawer} aria-label="main-menu">
			<Hidden mdUp implementation="js">
				<SwipeableDrawer
					variant="temporary"
					anchor="left"
					open={open}
					onOpen={onOpenDrawer}
					onClose={onCloseDrawer}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					disableBackdropTransition={!iOS}
					disableDiscovery={iOS}
				>
					<List>{items}</List>
				</SwipeableDrawer>
			</Hidden>
			<Hidden smDown implementation="js">
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
					open
				>
					<div className={classes.toolbar} />
					<List>{items}</List>
				</Drawer>
			</Hidden>
		</nav>
	)
}
