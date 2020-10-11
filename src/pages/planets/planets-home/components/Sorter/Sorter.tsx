import clsx from "classnames"
import React, { useState } from "react"
import { Menu, MenuItem, SvgIcon } from "@material-ui/core"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { KeyboardArrowDown as DownIcon, KeyboardArrowUp as UpIcon } from "@material-ui/icons"

import useFiltersContext from "core/hooks/useFiltersContext.hook"
import { TSortValue } from "core/context/Filters.context"

import styles from "./Sorter.module.scss"

export interface ISorterProps {}

const sortOptions = {
	planetName: "Planet Name",
	population: "Population Amount",
}

interface ISorterState {
	anchorEl: EventTarget | null
	headerTitle: string
}

export default function Sorter(props: ISorterProps) {
	const { filters, setFilters } = useFiltersContext()
	const optionsLabel = Object.values(sortOptions)
	const optionsValue = Object.keys(sortOptions)

	const selectedItemIndex = optionsValue.findIndex((item) => filters.sort === item)

	const [state, setState] = useState<ISorterState>({
		anchorEl: null,
		headerTitle: `Sort by ${optionsLabel[selectedItemIndex]} (${filters.order})`,
	})

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setState({
			...state,
			anchorEl: event.currentTarget,
		})
	}

	const handleClose = () => {
		setState({
			...state,
			anchorEl: null,
		})
	}

	const handleSelect = (value: TSortValue) => {
		const localSelectedItemIndex = optionsValue.findIndex((item) => value === item)
		let order = filters.order

		if (value === filters.sort) {
			order = order === "desc" ? "asc" : "desc"
		}

		setFilters({
			...filters,
			sort: value,
			order,
		})

		setState({
			headerTitle: `Sort by ${optionsLabel[localSelectedItemIndex]} (${order})`,
			anchorEl: null,
		})
	}

	const open = Boolean(state.anchorEl)

	return (
		<div className={styles.root}>
			<button className={styles.button} onClick={handleClick}>
				<p className={styles.title}>{state.headerTitle}</p>

				{/** Safari and IE are being new best enemies! */}
				<SwitchTransition>
					<CSSTransition
						key={open ? "icon-active" : "icon-inactive"}
						classNames="fade-transition"
						timeout={200}
						unmountOnExit
					>
						<SvgIcon className={styles.icon} width={24} height={24} component={open ? UpIcon : DownIcon} />
					</CSSTransition>
				</SwitchTransition>
			</button>
			<Menu
				open={open}
				anchorEl={state.anchorEl as HTMLElement}
				elevation={8}
				onClose={handleClose}
				classes={{
					paper: clsx(styles.root, styles.paper),
				}}
				variant="menu"
				keepMounted
			>
				{optionsValue.map((item, index) => (
					<MenuItem
						key={`${Math.floor(Math.random() * Math.floor(1000000000))}-menu-item-${item}`}
						selected={filters.sort === item}
						onClick={(event) => handleSelect(item as TSortValue)}
						classes={{
							root: clsx(styles.root, styles.menuItemRoot),
							selected: clsx(styles.root, styles.menuItemRootSelected),
						}}
						dense
					>
						<p className={clsx(styles.root, styles.itemText)}>{optionsLabel[index]}</p>
					</MenuItem>
				))}
			</Menu>
		</div>
	)
}
