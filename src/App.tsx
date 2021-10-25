import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/Button";
import { lightTheme } from "./components/styles/lightTheme";
import { darkTheme } from "./components/styles/darkTheme";
import { brightColors } from "./components/styles/brightColors";

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<>
				<header className="App-header">
					<h2>Button with light theme</h2>
					<Button />
				</header>
				<ThemeProvider theme={darkTheme}>
					<header className="App-header">
						<h2>Button with dark theme</h2>
						<Button />
					</header>
				</ThemeProvider>
				<ThemeProvider theme={brightColors}>
					<header className="App-header">
						<h2>Button with bright colors theme</h2>
						<Button />
					</header>
				</ThemeProvider>
			</>
		</ThemeProvider>
	);
}

export default App;
