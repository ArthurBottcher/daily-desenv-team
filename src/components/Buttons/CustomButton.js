import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { custom_theme } from "../../assets/theme";

const useStyles = makeStyles((theme) => ({
	success: {
		color: custom_theme.palette.success.contrastText,
		backgroundColor: custom_theme.palette.success.main,
		"&:hover": {
			backgroundColor: custom_theme.palette.success.dark,
		},
	},
	error: {
		color: custom_theme.palette.error.contrastText,
		backgroundColor: custom_theme.palette.error.main,
		"&:hover": {
			backgroundColor: custom_theme.palette.error.dark,
		},
	},
	info: {
		color: custom_theme.palette.info.contrastText,
		backgroundColor: custom_theme.palette.info.main,
		"&:hover": {
			backgroundColor: custom_theme.palette.info.dark,
		},
	}
}));

function CustomButton({ text, type }) {
	const classes = useStyles();
	return <Button className={classes[type]}>{text}</ Button>;
}

export default CustomButton;