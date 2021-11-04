import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styles/lightTheme";
//import { darkTheme } from "./components/styles/darkTheme";
//import { brightColors } from "./components/styles/brightColors";
import { GlobalStyle } from "./components/styles/global";

//import { Button } from "./containers/Button/Button";
//import { DateCircle } from "./containers/DateCircle/DateCircle";
import { Div } from "./components/Container/Div";
import { Header } from "./containers/Header/Header";
import { PostForm } from "./containers/PostForm/PostForm";
import { Posts } from "./containers/Posts/Posts";

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Div>
					<Header text="Components with light theme" />
					<PostForm />
					<hr />
					<Posts />
				</Div>
			</ThemeProvider>
		</>
	);
}

export default App;

// Old app that shows buttons and themes
// <>
// 	<GlobalStyle />
// 	<ThemeProvider theme={lightTheme}>
// 		<Div>
// 			<Header text="Components with light theme" />
// 			<Button />
// 			<DateCircle date={new Date()} />
// 		</Div>
// 	</ThemeProvider>
// 	<ThemeProvider theme={darkTheme}>
// 		<Div>
// 			<Header text="Components with dark theme" />
// 			<Button />
// 			<DateCircle date={new Date()} />
// 		</Div>
// 	</ThemeProvider>
// 	<ThemeProvider theme={brightColors}>
// 		<Div>
// 			<Header text="Components with bright theme" />
// 			<Button />
// 			<DateCircle date={new Date()} />
// 		</Div>
// 	</ThemeProvider>
// </>;
