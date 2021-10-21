import React from "react";
import { ThemeProvider } from "styled-components";
import { Button, ButtonProps } from "./components/Button/Button";

const invertedTheme = {};

const theme = () => {
	return (
		<ThemeProvider theme={invertedTheme}>
			<Button />
		</ThemeProvider>
	);
};

export default theme;
