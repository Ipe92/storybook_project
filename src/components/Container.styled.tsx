import styled from "styled-components";

export interface ContainerProps {
	backgroundColor?: string;
	flexDirection?: string;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	background: ${({ backgroundColor }) => backgroundColor};
	border: none;
	flex-direction: ${({ flexDirection }) => flexDirection};

	@media (max-width: 1240px) {
		flex-direction: column;
	}
`;
