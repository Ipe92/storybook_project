/*
Step 5: Test Props
Storybook can't load docgen information from pre-built libraries,
so to test that aspect out, create a file ./src/stories/Button.tsx:
*/
// type ButtonProps = {
// 	children: ReactNode;

// 	/**
// 	 * Simple click handler
// 	 */
// 	onClick?: () => void;
// };

/**
 * The world's most _basic_ button
//  */
// export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
// 	<button onClick={onClick} type="button">
// 		{children}
// 	</button>
// );

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
