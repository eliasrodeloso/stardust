import React, { Fragment } from "react"
import { Chip, CircularProgress } from "@material-ui/core"
import { CSSTransition } from "react-transition-group"
import { AccountCircleOutlined } from "@material-ui/icons"

import usePlanetPeopleStore from "./usePlanetPeopleStore.hook"
import styles from "./PlanetPeople.module.scss"

export interface IPlanetPeople {
	planetId: string
}

/* eslint-disable complexity */
export default function PlanetPeople(props: IPlanetPeople) {
	const { planetId } = props
	const store = usePlanetPeopleStore(planetId)
	return (
		<div className={styles.residentsWrapper}>
			<h4 className={styles.title}>Known residents who live on this planet</h4>

			{store.isLoadingPeople && <CircularProgress size={30} />}

			{!store.people && !store.isLoadingPeople && <p>None so far</p>}

			<CSSTransition
				in={!store.isLoadingPeople && Boolean(store.people)}
				appear={!store.isLoadingPeople && Boolean(store.people)}
				timeout={150}
				addEndListener={() => {}}
				classNames="react-transition"
				unmountOnExit
				enter
				exit
			>
				<Fragment>
					{store.people?.map((item) => (
						<Chip
							key={item.url}
							classes={{ root: styles.chip }}
							icon={<AccountCircleOutlined />}
							label={item.name}
							variant="outlined"
						/>
					))}
				</Fragment>
			</CSSTransition>
		</div>
	)
}
