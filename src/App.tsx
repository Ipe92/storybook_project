import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styles/lightTheme";
import { darkTheme } from "./components/styles/darkTheme";
import { brightColors } from "./components/styles/brightColors";
import { GlobalStyle } from "./components/styles/global";

import { Button } from "./components/Button/Button";
import { DateCircle } from "./components/DateCircle/DateCircle";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Container>
					<Header text="Components with light theme" />
					<Button />
					<DateCircle date={new Date()} />
				</Container>
			</ThemeProvider>
			<ThemeProvider theme={darkTheme}>
				<Container>
					<Header text="Components with dark theme" />
					<Button />
					<DateCircle date={new Date()} />
				</Container>
			</ThemeProvider>
			<ThemeProvider theme={brightColors}>
				<Container>
					<Header text="Components with bright theme" />
					<Button />
					<DateCircle date={new Date()} />
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
