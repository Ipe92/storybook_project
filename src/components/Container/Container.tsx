import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	border: 2px solid black;
	flex: none;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.main};
	background: ${({ theme }) => theme.colors.secondary};

	@media (max-width: 550px) {
		flex-direction: column;
	}
`;
