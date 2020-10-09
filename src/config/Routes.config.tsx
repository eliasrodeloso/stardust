import React from "react"
import { Router as ReachRouter } from "@reach/router"

import MainLayout from "layouts/Main.layout"

import PlanetsHome from "pages/planets/planets-home/Planets.page"

export default function Router() {
	return (
		<ReachRouter>
			<MainLayout path="/">
				<PlanetsHome path="/" />
			</MainLayout>
		</ReachRouter>
	)
}
