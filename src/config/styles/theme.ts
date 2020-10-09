import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
	typography: {
		fontFamily: '"Proxima Nova", Helvetica, sans-serif',
	},
	palette: {
		type: "dark",
		background: {
			default: "#1d1d1d",
		},
		primary: {
			main: "#ffe400",
		},
		secondary: {
			main: "#14a76c",
		},
	},
})
