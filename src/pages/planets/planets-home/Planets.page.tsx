import React, { useCallback, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import { List, Paper } from "@material-ui/core"

import usePlanetsStore from "pages/planets/planets-home/usePlanetsStore.hook"
import usePlanetsSagas from "pages/planets/planets-home/usePlanetsSagas.hook"
import PlanetItem from "pages/planets/planets-home/components/PlanetItem/PlanetItem"

import styles from "./PlanetsPage.module.scss"

interface IPlanetsHomeProps extends RouteComponentProps {}

export default function CharactersHome(props: IPlanetsHomeProps) {
	// eslint-disable-next-line
	const store = usePlanetsStore()
	const actions = usePlanetsSagas()

	useEffect(
		useCallback(() => {
			actions.getPlanets({ name: null })
		}, [actions]),
		[]
	)

	return (
		<Paper classes={{ root: styles.paper }} elevation={3}>
			<h1 className={styles.planetsTitle}>Planets</h1>
			<List>
				{store.planets?.map((item) => (
					<PlanetItem key={`${item.name}${item.url}`} item={item} />
				))}
			</List>
		</Paper>
	)
}
