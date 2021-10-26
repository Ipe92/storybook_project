import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styles/lightTheme";
import { darkTheme } from "./components/styles/darkTheme";
import { brightColors } from "./components/styles/brightColors";
import { GlobalStyle } from "./components/styles/global";

import { Button } from "./components/Button/Button";
import { DateCircle } from "./components/DateCircle/DateCircle";

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<div style={{ display: "flex" }}>
				<GlobalStyle />
				<header style={{ backgroundColor: "grey", flex: 1 }} className="App-header">
					<h2>Components with light theme</h2>
					<Button />
					<DateCircle date={new Date()} />
				</header>
				<ThemeProvider theme={darkTheme}>
					<header style={{ backgroundColor: "azure", flex: 1 }} className="App-header2">
						<h2>Components with dark theme</h2>
						<Button />
						<DateCircle date={new Date()} />
					</header>
				</ThemeProvider>
				<ThemeProvider theme={brightColors}>
					<header style={{ backgroundColor: "teal", flex: 1 }} className="App-header3">
						<h2>Components with bright colors theme</h2>
						<Button />
						<DateCircle date={new Date()} />
					</header>
				</ThemeProvider>
			</div>
		</ThemeProvider>
	);
}

export default App;
