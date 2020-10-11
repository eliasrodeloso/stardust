import React from "react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { Provider as ReduxProvider } from "react-redux"
import { Helmet, HelmetProvider } from "react-helmet-async"

import store from "config/store.config"
import LoadingBar from "common/LoadingBar/LoadingBar"

import Router from "config/Routes.config"
import theme from "config/styles/theme"
import FeedbackMessages from "common/FeedbackMessages/FeedbackMessage"
import FiltersContextProvider from "core/context/Filters.context"

export default function App() {
	return (
		<HelmetProvider>
			<ReduxProvider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Helmet>
						<meta charSet="utf-8" />
						<title>Stardust</title>
					</Helmet>
					<LoadingBar />
					<FeedbackMessages />
					<FiltersContextProvider>
						<Router />
					</FiltersContextProvider>
				</ThemeProvider>
			</ReduxProvider>
		</HelmetProvider>
	)
}
