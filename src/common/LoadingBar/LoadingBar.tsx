import { useSelector } from "react-redux"
import NProgress from "nprogress"

import loadingSelector from "core/selectors/loading.selector"

NProgress.configure({
	template: `
    <div class="nprogress-bar" role="bar">

    </div>
  `,
})

export default function LoadingBar() {
	const isLoading = useSelector(loadingSelector(["GET_PLANETS", "GET_FILMS", "GET_PEOPLE"]))
	if (isLoading) {
		NProgress.start()
	}

	if (!isLoading) {
		NProgress.done()
	}

	return null
}
