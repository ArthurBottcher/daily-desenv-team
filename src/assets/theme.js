import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
export let custom_theme = createTheme({
	palette: {
		primary: {
			main: "#3d5a80",
		},
		secondary: {
			main: "#ee6c4d",
		},
		info: {
			main: "#98c1d9"
		},
		success: {
			main: "#32db81"
		},
		error: {
			main: "#ef233c"
		},
		warning: {
			main: "#676553"
		},
		text: {
			main: "#293241"
		},
		background: {
			main: "#e0fbfc"
		}
	},
});

custom_theme = responsiveFontSizes(custom_theme);
