import React, { createContext, useState, Dispatch, SetStateAction } from "react"

export type TSortValue = "planetName" | "population"

export interface IFilters {
	sort: TSortValue
	order: "asc" | "desc"
}

export const initialFilters: IFilters = {
	sort: "planetName",
	order: "asc",
}

interface IContextInitialValues {
	filters: IFilters
	setFilters: Dispatch<SetStateAction<IFilters>>
	resetFilters: () => void
}

const contextValues: IContextInitialValues = {
	filters: initialFilters,
	setFilters: () => {},
	resetFilters: () => {},
}

export const FiltersContext = createContext(contextValues)

FiltersContext.displayName = "FiltersContext"

interface IFiltersComponetProps {
	children: JSX.Element | JSX.Element[]
}

function FiltersContextProvider(props: IFiltersComponetProps) {
	const { children } = props
	const [filters, setFilters] = useState<IFilters>({ ...initialFilters })

	const resetFilters = () => setFilters({ ...initialFilters })

	return <FiltersContext.Provider value={{ filters, setFilters, resetFilters }}>{children}</FiltersContext.Provider>
}

export default FiltersContextProvider
