import React, { useCallback, useEffect, useMemo } from "react"
import { Chip } from "@material-ui/core"
import { AccountCircleOutlined, MovieOutlined } from "@material-ui/icons"

import usePlanetRelatedSagas from "pages/planets/planets-home/components/PlanetRelated/usePlanetRelatedSagas.hook"

import usePlanetRelatedStore from "pages/planets/planets-home/components/PlanetRelated/usePlanetRelatedStore.hook"

import styles from "./PlanetRelatedItem.module.scss"

interface PlanetRelatedItemsProps {
	films: Array<string>
	residents: Array<string>
	planetId: string
}

export default function PlanetRelatedItems(props: PlanetRelatedItemsProps) {
	const { residents, planetId: planetIdProp, films } = props

	const planetId = useMemo<string>(() => {
		const match = planetIdProp.match(/\d+/g)
		if (match) {
			return `planet${match[0]}`
		}
		return ""
	}, [planetIdProp])

	const actions = usePlanetRelatedSagas()
	const store = usePlanetRelatedStore(planetId)

	useEffect(
		useCallback(() => {
			actions.getPeople(residents, planetId)
			actions.getFilms(films, planetId)
		}, [actions, residents, planetId, films]),
		[]
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.residentsWrapper}>
				<h4 className={styles.title}>Known residents who live on this planet</h4>
				{store.people?.map((item) => (
					<Chip
						key={item.url}
						classes={{ root: styles.chip }}
						icon={<AccountCircleOutlined />}
						label={item.name}
						variant="outlined"
					/>
				))}
			</div>
			<div className={styles.filmsWrapper}>
				<h4 className={styles.title}>Movies that were filmed on this planet</h4>
				{store.films?.map((item) => (
					<Chip
						key={item.url}
						classes={{ root: styles.chip }}
						icon={<MovieOutlined />}
						label={item.title}
						variant="outlined"
					/>
				))}
			</div>
		</div>
	)
}
