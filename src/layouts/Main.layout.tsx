import React, { useState } from "react"
import { RouteComponentProps, useLocation } from "@reach/router"
import { Slide } from "@material-ui/core"
import { TransitionGroup } from "react-transition-group"

import AppHeader from "common/Header/Header"
import AppDrawer from "common/Drawer/Drawer"

import useStyles from "./MainLayout.styles"

interface MainLayoutProps extends RouteComponentProps {
	children: JSX.Element | JSX.Element[]
}

export default function ResponsiveDrawer(props: MainLayoutProps) {
	const { children } = props
	const classes = useStyles()
	const location = useLocation()
	const [openDrawer, setOpenDrawer] = useState(false)

	return (
		<div className={classes.root}>
			<AppHeader onMenuClick={() => setOpenDrawer(!openDrawer)} />
			<AppDrawer
				open={openDrawer}
				onOpenDrawer={() => setOpenDrawer(true)}
				onCloseDrawer={() => setOpenDrawer(false)}
			/>
			<div className={classes.main}>
				<div className={classes.toolbar} />
				<TransitionGroup component={null}>
					<Slide direction="left" key={location.key} timeout={200}>
						<main className={classes.content}>{children}</main>
					</Slide>
				</TransitionGroup>
			</div>
		</div>
	)
}
