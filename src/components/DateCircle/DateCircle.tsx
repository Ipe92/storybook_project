import styled from "styled-components";

export interface DateCircleProps {
	date: Date;
}

export function DateCircle({ date }: DateCircleProps) {
	const monthNames = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];

	const month = monthNames[date.getMonth()];
	const day = date.getDate();

	return (
		<div data-testid="date-circle">
			<DateCircleStyle>
				<p>{day}</p>
				<p>{month}</p>
			</DateCircleStyle>
		</div>
	);
}

export const DateCircleStyle = styled.div`
	width: 50px;
	height: 50px;
	float: left;
	border-radius: 100%;
	font-size: 16px;
	background: ${({ theme }) => theme.colors.secondary};
	border: 4px solid ${({ theme }) => theme.colors.main};
	padding: 10px;
	transform: translateY(133px);
	& > p {
		margin: 3px 0 0 15px;
		color: ${({ theme }) => theme.colors.main};
	}
`;
