import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../styles/theme";

export interface ButtonProps {
	label?: string;
	backgroundColor?: string;
	color?: string;
	size?: "sm" | "md" | "lg";
	handleClick?(...args: unknown[]): unknown;
}

export function Button({
	label = "button",
	backgroundColor = "blue",
	color = "white",
	size = "md",
	handleClick,
}: ButtonProps) {
	let scale = 2;
	if (size === "sm") scale = 1;
	if (size === "lg") scale = 3;

	const style = {
		backgroundColor,
		color,
		padding: `${scale * 1}rem ${scale * 2}rem`,
		border: "none",
	};

	return (
		<ThemeProvider theme={myTheme}>
			<StyledButton
				onClick={handleClick}
				style={style}
				color={color}
				backgroundColor={backgroundColor}
			>
				{label}
			</StyledButton>
		</ThemeProvider>
	);
}

const StyledButton = styled.button<ButtonProps>`
	border-radius: 50px;
	border: none;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: 15px 60px;
	background: ${({ backgroundColor }) => backgroundColor || "#03ec49"};
	color: ${({ color }) => color || "#f70b8d"};

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;
