import styled from "styled-components";

export interface HeaderProps {
	flexAmount?: number;
	flexBasis?: string;
	backgroundColor?: string;
}

export const Header = styled.header<HeaderProps>`
	display: flex;
	flex-basis: ${({ flexBasis }) => flexBasis};
	flex: ${({ flexAmount }) => flexAmount};
	background: ${({ backgroundColor }) => backgroundColor};
	padding: 50px;
	border: 5px solid black;
`;
