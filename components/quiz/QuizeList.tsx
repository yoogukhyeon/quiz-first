import React from 'react';
import styled from 'styled-components';
import { IoArrowForward } from 'react-icons/io5';
import { ButtonCommon } from '@/styles/common';
import { QuestionState } from '@/pages/quiz';
import { UserChk } from '@/pages/quiz';
import { useRouter } from 'next/router';
interface QuizList {
	quizList: QuestionState;
	number: number;
	onClickAnswer: (e: React.MouseEvent<HTMLInputElement>) => void;
	userChk: UserChk | undefined;
	onClickNext: React.MouseEventHandler<HTMLDivElement>;
	over: boolean;
	stepNext: boolean;
	score: number;
}

export default function QuizeList({ quizList, number, onClickAnswer, onClickNext, userChk, over, stepNext, score }: QuizList) {
	const router = useRouter();

	const goToResult = () => {
		router.push(`/result?score=${score}`);
	};

	return (
		<QuizWrap>
			<p>
				<span>{number + 1}.</span> {quizList?.question}
			</p>
			<InputWrap>
				{quizList?.answer?.map((val) => (
					<div key={val}>
						<input disabled={!!userChk} type="radio" name="answer" id={val} value={val} onClick={onClickAnswer} />
						<Label
							htmlFor={val}
							dangerouslySetInnerHTML={{ __html: val }}
							userClick={userChk?.answer === val}
							correct={userChk?.correctAnswer === val}
						></Label>
					</div>
				))}
			</InputWrap>
			{!over && stepNext && (
				<div className="button" onClick={onClickNext}>
					다음
					<i>
						<IoArrowForward />
					</i>
				</div>
			)}

			{over && (
				<div className="button" onClick={goToResult}>
					결과보기
					<i>
						<IoArrowForward />
					</i>
				</div>
			)}
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
		font-size: 22px;
		line-height: 28px;
		margin: 30px 0;
		font-weight: 600;
		word-break: break-word;
		padding-left: 27px;

		span {
			position: absolute;
			top: 3px;
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

		input:checked + label {
			background-color: #09a334;
			color: #fff;
		}
	}
`;

interface Correct {
	correct: boolean;
	userClick: boolean;
}

const Label = styled.label<Correct>`
	& {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 70px;
		padding: 0 20px;
		word-break: keep-all;
		color: #686868;
		background: ${({ correct, userClick }) =>
			correct ? 'linear-gradient(90deg, #15f37d, #3dc47a)' : !correct && userClick ? 'linear-gradient(90deg, #e93232, #b95c5c)' : '#ececec'};
		/* opacity: ${({ correct, userClick }) => (correct ? '1' : !correct && userClick ? '0.5' : '1')}; */
		border-radius: 10px;
		text-align: center;
		font-size: 20px;
		line-height: 26px;
		font-weight: 600;
		cursor: pointer;
	}
`;
