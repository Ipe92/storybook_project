import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styles/lightTheme";
import { darkTheme } from "./components/styles/darkTheme";
import { brightColors } from "./components/styles/brightColors";

import { Button } from "./components/Button/Button";
import { DateCircle } from "./components/DateCircle/DateCircle";

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<>
				<header className="App-header">
					<h2>Components with light theme</h2>
					<Button />
					<DateCircle date={new Date()} />
				</header>
				<ThemeProvider theme={darkTheme}>
					<header className="App-header">
						<h2>Components with dark theme</h2>
						<Button />
						<DateCircle date={new Date()} />
					</header>
				</ThemeProvider>
				<ThemeProvider theme={brightColors}>
					<header className="App-header">
						<h2>Components with bright colors theme</h2>
						<Button />
						<DateCircle date={new Date()} />
					</header>
				</ThemeProvider>
			</>
		</ThemeProvider>
	);
}

export default App;
