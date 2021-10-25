import React from "react";
import styled from "styled-components";

export const DateCircleStyle = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	background: #fff;
	border: 2px solid #daa520;
	padding: 10px;
	transform: translateY(133px);
	& > p {
		margin: 3px 0 0 15px;
		color: #daa520;
	}
`;

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
		<DateCircleStyle>
			<p>{day}</p>
			<p>{month}</p>
		</DateCircleStyle>
	);
}
