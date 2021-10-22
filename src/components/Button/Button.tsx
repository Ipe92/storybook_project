import styled from "styled-components";

export interface ButtonProps {
	label?: string;
	color?: string;
	backgroundColor?: string;
	size?: number;
	handleClick?(...args: unknown[]): unknown;
}

export function Button({ label = "button", size = 1.5, handleClick }: ButtonProps) {
	return (
		<StyledButton onClick={handleClick} size={size}>
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
	padding: ${({ size }) => size}rem;
	color: ${({ theme }) => theme.colors.main || "#ffffff"};
	background: ${({ theme }) => theme.colors.secondary || "#7e61ff"};

	&:hover {
		opacity: 0.8;
		transform: scale(0.95);
	}
`;
