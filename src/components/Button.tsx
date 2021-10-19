import { StyledButton } from "./styles/Button.styled";

export interface ButtonProps {
	label?: string;
	backgroundColor?: string;
	size?: "sm" | "md" | "lg";
	handleClick?(...args: unknown[]): unknown;
}

export function Button({
	label = "button",
	backgroundColor = "green",
	size = "md",
	handleClick,
}: ButtonProps) {
	let scale = 2;
	if (size === "sm") scale = 1;
	if (size === "lg") scale = 3;

	const style = {
		backgroundColor,
		padding: `${scale * 1}rem ${scale * 2}rem`,
		border: "none",
	};

	return (
		<StyledButton onClick={handleClick} style={style} color="#fff">
			{label}
		</StyledButton>
	);
}
