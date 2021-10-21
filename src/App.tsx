import React from "react";
//import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/Button";
//import { theme } from "./components/styles/theme";

function App() {
	return (
		//<ThemeProvider theme={theme}>
		<>
			<header className="App-header">
				<h1>React storybook project</h1>
				<Button />
			</header>
		</>
		//</ThemeProvider>
	);
}

export default App;
