import React, { useCallback, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import usePlanetsStore from "pages/planets/planets-home/usePlanetsStore.hook"
import usePlanetsSagas from "pages/planets/planets-home/usePlanetsSagas.hook"

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

	return <div>Planets Home Page</div>
}
