import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { posted } from "../../redux/features/post/post-slice";

export interface HeaderProps {
	text?: string;
	fontSize?: number;
	color?: string;
}

export function Header({ text = "Header", fontSize = 20, color = "red" }: HeaderProps) {
	const post = useAppSelector((state) => state.post.value);
	const dispatch = useAppDispatch();
	return (
		<StyledHeader text={text} fontSize={fontSize} color={color}>
			{post}
		</StyledHeader>
	);
}

export const StyledHeader = styled.h1<HeaderProps>`
	display: flex;
	flex: none;
	//color: ${({ color }) => color};
	color: ${({ theme }) => theme.colors.main};
	background: ${({ theme }) => theme.colors.secondary};
	font-size: ${({ fontSize }) => fontSize}px;
	padding: 50px;
`;
