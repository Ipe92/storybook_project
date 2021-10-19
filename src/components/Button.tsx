// Step 5: Test Props

export interface ButtonProps {
	label?: string;
	backgroundColor?: string;
	size?: "sm" | "md" | "lg";
	handleClick?(...args: unknown[]): unknown;
}

export function Button({
	// label: any, -> "can't find label"
	label = "button",
	backgroundColor = "red",
	size = "md",
	handleClick,
}: ButtonProps) {
	let scale = 1;
	if (size === "sm") scale = 0.75;
	if (size === "lg") scale = 1.75;

	const style = {
		backgroundColor,
		padding: `${scale * 0.5}rem ${scale * 1}rem`,
		border: "none",
	};

	return (
		<button onClick={handleClick} style={style}>
			{label}
		</button>
	);
}
