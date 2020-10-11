import React from "react"
import {
	Terrain as TerrainIcon,
	Cloud as ClimateIcon,
	People as PeopleIcon,
	WbSunny as DayDuration,
} from "@material-ui/icons"

import numberFormatter from "core/factories/numberFormatter"

import styles from "./PlanetMeta.module.scss"

export default function PlanetMeta(props: any) {
	const { item } = props
	return (
		<div className={styles.planetMeta}>
			{item.terrain !== "unknown" && (
				<p className={styles.terrain} aria-label="Terrain of the planet" title="Terrain of the planet">
					<TerrainIcon />
					{item.terrain}
				</p>
			)}
			{item.climate !== "unknown" && (
				<p className={styles.climate} aria-label="Climate of the planet" title="Climate of the planet">
					<ClimateIcon />
					{item.climate}
				</p>
			)}
			{item.population !== "unknown" && (
				<p
					className={styles.population}
					aria-label="Aproximate population of the planet"
					title="Aproximate population of the planet"
				>
					<PeopleIcon />
					{numberFormatter(item.population, 1)}
				</p>
			)}
			{item.rotation_period !== "unknown" && (
				<p
					className={styles.rotationPeriod}
					aria-label="Rotation period (aka. Day duration) of the planet"
					title="Rotation period (aka. Day duration) of the planet"
				>
					<DayDuration />
					{item.rotation_period}
				</p>
			)}
		</div>
	)
}
