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
	let scale = 2;
	if (size === "sm") scale = 1;
	if (size === "lg") scale = 3;

	const style = {
		backgroundColor,
		padding: `${scale * 1}rem ${scale * 2}rem`,
		border: "none",
	};

	return (
		<button onClick={handleClick} style={style}>
			{label}
		</button>
	);
}
