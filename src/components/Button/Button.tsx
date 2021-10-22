import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../styles/theme";

export interface ButtonProps {
	label?: string;
	backgroundColor?: string;
	color?: string;
	size?: number;
	handleClick?(...args: unknown[]): unknown;
}

export function Button({
	label = "button",
	backgroundColor = "blue",
	color = "white",
	size = 1.5,
	handleClick,
}: ButtonProps) {
	return (
		<ThemeProvider theme={myTheme}>
			<StyledButton
				onClick={handleClick}
				size={size}
				backgroundColor={backgroundColor}
				color={color}
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
	padding: ${({ size }) => size}rem;
	background: ${({ backgroundColor }) => backgroundColor || "#7e61ff"};
	color: ${({ color }) => color || "#ffffff"};

	&:hover {
		opacity: 0.8;
		transform: scale(0.95);
	}
`;
