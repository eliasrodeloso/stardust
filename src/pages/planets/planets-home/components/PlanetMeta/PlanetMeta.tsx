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
				<div className={styles.terrain} aria-label="Terrain of the planet" title="Terrain of the planet">
					<TerrainIcon />
					<p className={styles.truncate}>{item.terrain}</p>
				</div>
			)}
			{item.climate !== "unknown" && (
				<div className={styles.climate} aria-label="Climate of the planet" title="Climate of the planet">
					<ClimateIcon />
					<p className={styles.truncate}>{item.climate}</p>
				</div>
			)}
			{item.population !== "unknown" && (
				<div
					className={styles.population}
					aria-label="Aproximate population of the planet"
					title="Aproximate population of the planet"
				>
					<PeopleIcon />
					<p className={styles.truncate}>{numberFormatter(item.population, 1)}</p>
				</div>
			)}
			{item.rotation_period !== "unknown" && (
				<div
					className={styles.rotationPeriod}
					aria-label="Rotation period (aka. Day duration) of the planet"
					title="Rotation period (aka. Day duration) of the planet"
				>
					<DayDuration />
					<p className={styles.truncate}>{item.rotation_period}</p>
				</div>
			)}
		</div>
	)
}
