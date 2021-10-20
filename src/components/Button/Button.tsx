import styled from "styled-components";

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
		<StyledButton
			onClick={handleClick}
			style={style}
			color={color}
			backgroundColor={backgroundColor}
		>
			{label}
		</StyledButton>
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
	background: ${({ backgroundColor }) => backgroundColor};
	color: ${({ color }) => color};

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;
