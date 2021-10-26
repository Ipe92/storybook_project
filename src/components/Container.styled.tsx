import styled from "styled-components";

export interface ContainerProps {
	backgroundColor?: string;
	flexDirection?: string;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	background: ${({ backgroundColor }) => backgroundColor};
	border: 5px solid black;
	flex-direction: ${({ flexDirection }) => flexDirection};
`;
