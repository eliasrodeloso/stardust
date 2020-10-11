import React, { Fragment, useCallback, useEffect, useMemo } from "react"
import { CSSTransition } from "react-transition-group"
import clsx from "classnames"

import usePlanetRelatedSagas from "pages/planets/planets-home/components/PlanetRelated/usePlanetRelatedSagas.hook"
import usePlanetRelatedStore from "pages/planets/planets-home/components/PlanetRelated/usePlanetRelatedStore.hook"

import PlanetPeople from "pages/planets/planets-home/components/PlanetPeople/PlanetPeople"
import PlanetFilms from "pages/planets/planets-home/components/PlanetFilms/PlanetFilms"

import styles from "./PlanetRelatedItem.module.scss"

interface PlanetRelatedItemsProps {
	films: Array<string>
	residents: Array<string>
	planetId: string
	open: boolean
}

export default function PlanetRelatedItems(props: PlanetRelatedItemsProps) {
	const { residents, planetId: planetIdProp, films, open } = props

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
			if (!store.people && !store.films) {
				actions.getPeople(residents, planetId)
				actions.getFilms(films, planetId)
			}
		}, [actions, residents, planetId, films, store]),
		[]
	)

	return (
		<div className={clsx(styles.wrapper, open && styles.isOpen)}>
			<CSSTransition
				in={open}
				appear={open}
				timeout={150}
				addEndListener={() => {}}
				classNames="react-transition"
				unmountOnExit
				enter
				exit
			>
				<Fragment>
					<PlanetPeople planetId={planetId} />
					<PlanetFilms planetId={planetId} />
				</Fragment>
			</CSSTransition>
		</div>
	)
}
