import React, { useState } from "react"
import { Avatar, IconButton, IconButtonProps, ListItem, ListItemAvatar, ListItemText, SvgIcon } from "@material-ui/core"
import { ExpandMore, ExpandLess } from "@material-ui/icons"

import { ReactComponent as PlanetsIcon } from "assets/icons/planets.svg"
import PlanetRelatedItems from "pages/planets/planets-home/components/PlanetRelated/PlanetRelatedItem"

import PlanetMeta from "pages/planets/planets-home/components/PlanetMeta/PlanetMeta"

import styles from "./PlanetItem.module.scss"

interface IExpandButtonProps extends IconButtonProps {
	open: boolean
}

function ExpandButton(props: IExpandButtonProps) {
	const { open, ...restProps } = props
	return <IconButton {...restProps}>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
}

export default function PlanetItem(props: any) {
	const { item } = props
	const [isMoreOpen, setIsMoreOpen] = useState(false)

	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar>
					<SvgIcon component={PlanetsIcon} viewBox="0 0 16 16" />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={
					<div className={styles.planet}>
						<span className={styles.seeMore}>
							<ExpandButton
								open={isMoreOpen}
								onClick={() => {
									setIsMoreOpen((state) => !state)
								}}
							/>
						</span>
						<h3 className={styles.planetName}>{item.name}</h3>
						<PlanetMeta item={item} />
						{isMoreOpen && <PlanetRelatedItems planetId={item.url} residents={item.residents} films={item.films} />}
					</div>
				}
			/>
		</ListItem>
	)
}
