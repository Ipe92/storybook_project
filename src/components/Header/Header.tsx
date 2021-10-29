import styled from "styled-components";

export interface HeaderProps {
	text?: string;
	fontSize?: number;
	color?: string;
}

export function Header({ text = "Header", fontSize = 20, color = "red" }: HeaderProps) {
	return (
		<StyledHeader text={text} fontSize={fontSize} color={color}>
			{text}
		</StyledHeader>
	);
}

export const StyledHeader = styled.h1<HeaderProps>`
	display: flex;
	flex: none;
	color: ${({ color }) => color}px;
	font-size: ${({ fontSize }) => fontSize}px;
	padding: 50px;
`;
