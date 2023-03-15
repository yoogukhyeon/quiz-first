import React from 'react';
import styled from 'styled-components';

export const Top = () => {
	return (
		<TopWrap>
			<div className="header">
				<h2>QUIZ - 나의 지식 수준은?</h2>
				<div>
					<p>2 / 10</p>
					<p>score: 0</p>
				</div>
			</div>
		</TopWrap>
	);
};

const TopWrap = styled.div`
	border-bottom: 1px solid #ececec;

	.header {
		width: 100%;
		max-width: 375px;
		margin: 0 auto;
		padding: 40px 10px 20px;
		h2 {
			font-size: 23px;
			line-height: 28px;
			font-weight: 700;
			color: #09a334;
		}
		div {
			margin: 10px 0;
			display: flex;
			justify-content: space-between;
			align-items: center;

			p {
				color: #cbcbcb;
				font-size: 20px;
				line-height: 26px;
			}
		}
	}
`;
