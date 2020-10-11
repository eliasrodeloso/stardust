import React, { useCallback, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import { List, Paper } from "@material-ui/core"

import PlanetItem from "pages/planets/planets-home/components/PlanetItem/PlanetItem"
import usePlanetsSagas from "pages/planets/planets-home/usePlanetsSagas.hook"
import usePlanetsStore from "pages/planets/planets-home/usePlanetsStore.hook"
import Sorter from "pages/planets/planets-home/components/Sorter/Sorter"
import useFiltersContext from "core/hooks/useFiltersContext.hook"

import styles from "./PlanetsPage.module.scss"

interface IPlanetsHomeProps extends RouteComponentProps {}

export default function CharactersHome(props: IPlanetsHomeProps) {
	const store = usePlanetsStore()
	const actions = usePlanetsSagas()
	const { filters } = useFiltersContext()

	useEffect(
		useCallback(() => {
			actions.getPlanets({ name: null })
		}, [actions]),
		[]
	)

	useEffect(
		useCallback(() => {
			if (store.planets) {
				actions.sort(filters)
			}
		}, [filters, actions, store]),
		[filters.sort, filters.order]
	)

	return (
		<Paper classes={{ root: styles.paper }} elevation={3}>
			<header className={styles.header}>
				<h1 className={styles.planetsTitle}>Planets</h1>
				<Sorter />
			</header>
			<main>
				<List>
					{store.planets?.map((item) => (
						<PlanetItem key={`${item.name}${item.url}`} item={item} />
					))}
				</List>
			</main>
		</Paper>
	)
}
