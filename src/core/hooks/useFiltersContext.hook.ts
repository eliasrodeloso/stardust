import { FiltersContext } from "core/context/Filters.context"
import { useContext } from "react"

export default function useFiltersContext() {
	return useContext(FiltersContext)
}
