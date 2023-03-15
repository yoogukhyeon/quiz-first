import React from 'react';
import styled from 'styled-components';
import { IoArrowForward } from 'react-icons/io5';
import { ButtonCommon } from '@/styles/common';
export default function QuizeList() {
	return (
		<QuizWrap>
			<p>
				<span>01.</span> 한국에 수도는?
			</p>
			<InputWrap>
				<div>
					<input type="radio" name="answer" id="answer" />
					<label htmlFor="answer"></label>
				</div>

				<div>
					<input type="radio" name="answer" id="answer2" />
					<label htmlFor="answer2"></label>
				</div>

				<div>
					<input type="radio" name="answer" id="answer3" />
					<label htmlFor="answer3"></label>
				</div>

				<div>
					<input type="radio" name="answer" id="answer4" />
					<label htmlFor="answer4"></label>
				</div>

				<div>
					<input type="radio" name="answer" id="answer5" />
					<label htmlFor="answer5"></label>
				</div>
			</InputWrap>

			<div className="button">
				다음
				<i>
					<IoArrowForward />
				</i>
			</div>
			<div className="button">
				결과보기
				<i>
					<IoArrowForward />
				</i>
			</div>
		</QuizWrap>
	);
}

const QuizWrap = styled.div`
	min-height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	p {
		position: relative;
		font-size: 24px;
		margin: 30px 0;
		font-weight: 600;
		word-break: keep-all;
		padding-left: 40px;

		span {
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.button {
		${ButtonCommon}
	}
`;

const InputWrap = styled.div`
	width: 100%;

	> div {
		position: relative;
		margin-top: 30px;
		input {
			position: absolute;
			top: 0;
			left: -80px;
			display: none;
		}

		:first-child {
			margin-top: 0;
		}

		label {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 70px;
			padding: 0 20px;
			word-break: keep-all;
			color: #686868;
			background: #ececec;
			border-radius: 10px;
			text-align: center;
			font-size: 28px;
			line-height: 34px;
			font-weight: 600;
			cursor: pointer;
		}

		input:checked + label {
			background-color: #09a334;
			color: #fff;
		}
	}
`;
