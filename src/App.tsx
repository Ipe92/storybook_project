import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styles/lightTheme";
import { darkTheme } from "./components/styles/darkTheme";
import { brightColors } from "./components/styles/brightColors";
import { GlobalStyle } from "./components/styles/global";

import { Button } from "./containers/Button/Button";
import { DateCircle } from "./containers/DateCircle/DateCircle";
import { Div } from "./components/Container/Div";
import { Header } from "./containers/Header/Header";
import { Postform } from "./containers/PostForm/Postform";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { posted } from "./redux/features/post/post-slice";

function App() {
	const post = useAppSelector((state) => state.post.value);

	console.log("global redux state is: ", post);

	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(posted("asd"));
	};

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Div>
					<p>Post value is: {post}</p>
					<button onClick={handleClick}></button>
					<Header text="Components with light theme" />
					<button onClick={handleClick}>GLOBAL STATE</button>
					<Button />
					<DateCircle date={new Date()} />
					<Postform />
				</Div>
			</ThemeProvider>
			<ThemeProvider theme={darkTheme}>
				<Div>
					<Header text="Components with dark theme" />
					<Button />
					<DateCircle date={new Date()} />
				</Div>
			</ThemeProvider>
			<ThemeProvider theme={brightColors}>
				<Div>
					<Header text="Components with bright theme" />
					<Button />
					<DateCircle date={new Date()} />
				</Div>
			</ThemeProvider>
		</>
	);
}

export default App;
