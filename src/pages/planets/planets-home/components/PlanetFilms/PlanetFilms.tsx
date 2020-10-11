import { Chip, CircularProgress } from "@material-ui/core"
import { MovieOutlined } from "@material-ui/icons"
import React, { Fragment } from "react"
import { CSSTransition } from "react-transition-group"

import usePlanetFilmsStore from "./usePlanetFilmsStore.hook"
import styles from "./PlanetFilms.module.scss"

export interface IPlanetFilmsProps {
	planetId: string
}

/* eslint-disable complexity */
export default function PlanetFilms(props: IPlanetFilmsProps) {
	const { planetId } = props

	const store = usePlanetFilmsStore(planetId)

	return (
		<div className={styles.filmsWrapper}>
			<h4 className={styles.title}>Movies that were filmed on this planet</h4>

			{store.isLoadingFilms && <CircularProgress size={30} />}

			{!store.films && !store.isLoadingFilms && <p>None so far</p>}

			<CSSTransition
				in={!store.isLoadingFilms && Boolean(store.films)}
				appear={!store.isLoadingFilms && Boolean(store.films)}
				timeout={150}
				addEndListener={() => {}}
				classNames="react-transition"
				unmountOnExit
				enter
				exit
			>
				<Fragment>
					{store.films?.map((item) => (
						<Chip
							key={item.url}
							classes={{ root: styles.chip }}
							icon={<MovieOutlined />}
							label={item.title}
							variant="outlined"
						/>
					))}
				</Fragment>
			</CSSTransition>
		</div>
	)
}
