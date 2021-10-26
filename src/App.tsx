import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styles/lightTheme";
import { darkTheme } from "./components/styles/darkTheme";
import { brightColors } from "./components/styles/brightColors";
import { GlobalStyle } from "./components/styles/global";

import { Button } from "./components/Button/Button";
import { DateCircle } from "./components/DateCircle/DateCircle";
import { Container } from "./components/Container.styled";
import { Header } from "./components/Header.styled";

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<Container flexDirection="row">
				<GlobalStyle />
				<Header backgroundColor="grey" flexAmount={1} className="App-header">
					<h2>Components with light theme</h2>
					<Button />
					<DateCircle date={new Date()} />
				</Header>
				<ThemeProvider theme={darkTheme}>
					<Header backgroundColor="azure" flexAmount={1} className="App-header2">
						<h2>Components with dark theme</h2>
						<Button />
						<DateCircle date={new Date()} />
					</Header>
				</ThemeProvider>
				<ThemeProvider theme={brightColors}>
					<Header backgroundColor="teal" flexAmount={1} className="App-header3">
						<h2>Components with bright theme</h2>
						<Button />
						<DateCircle date={new Date()} />
					</Header>
				</ThemeProvider>
			</Container>
		</ThemeProvider>
	);
}

export default App;
