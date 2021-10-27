import styled from "styled-components";

export interface ButtonProps {
	label?: string;
	size?: number;
	handleClick?(): any;
}

const handleClick = () => {
	console.log(`You pressed a button`);
};

export function Button({ label = "button", size = 1 }: ButtonProps) {
	return (
		<StyledButton onClick={handleClick} size={size} label={label}>
			{label}
		</StyledButton>
	);
}

export const StyledButton = styled.button<ButtonProps>`
	display: flex;
	align-items: left;
	justify-content: left;
	border-radius: ${({ theme }) => theme.borderRadius};
	border: none;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: ${({ size }) => size}rem;
	color: ${({ theme }) => theme.colors.main};
	background: ${({ theme }) => theme.colors.secondary};
	margin: 10px;

	&:hover {
		opacity: 0.8;
		transform: scale(0.95);
	}
	&:active {
		color: ${({ theme }) => theme.colors.secondary};
		background: ${({ theme }) => theme.colors.main};
	}
`;
