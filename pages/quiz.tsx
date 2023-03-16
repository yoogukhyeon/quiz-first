import React, { useEffect, useState } from 'react';
import Main from '@/components/layouts/Main';
import styled from 'styled-components';
import { Top } from '@/components/layouts/Top';
import { Bottom } from '@/components/layouts/Bottom';
import { GetServerSidePropsContext } from 'next';
import QuizeList from '@/components/quiz/QuizeList';
import { Data } from '@/mock/Data';

export interface Question {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
}

export interface QuestionState extends Question {
	answer: string[];
}

export interface UserChk {
	correct: boolean;
	answer: string;
	correctAnswer: string;
}

export default function Quiz() {
	const [data, setData] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState<number>(0);
	const [score, setScore] = useState(0);
	const [total, setTotal] = useState<number>(10);
	const [userChk, setUserChk] = useState<UserChk[]>([]);
	const [over, setOver] = useState<boolean>(false);
	const [stepNext, setStepNext] = useState<boolean>(false);

	useEffect(() => {
		setData(Data);
		setTotal(Data.length);
	}, []);

	const onClickAnswer = (e: React.MouseEvent<HTMLInputElement>) => {
		const answer = e.currentTarget.value;
		const correct = data[number].correct_answer === answer;

		if (correct) setScore((prev) => prev + 1);

		const userChkObj = {
			correct,
			answer,
			correctAnswer: data[number].correct_answer,
		};

		setUserChk((prev) => [...prev, userChkObj]);
		setStepNext(true);
	};

	const onClickNext = () => {
		const nextNum = number + 1;
		if (nextNum === total) {
			setOver(true);
		} else {
			setNumber(nextNum);
			setStepNext(false);
		}
	};

	const [progress, setProgress] = useState<number>(0);
	useEffect(() => {
		const count = over ? total : number;
		const percent = (count / total) * 100;

		setProgress(percent);
	}, [number, over]);

	return (
		<>
			<Top total={total} score={score} number={number} />
			<Main>
				<QuizeList
					quizList={data[number]}
					onClickNext={onClickNext}
					userChk={userChk ? userChk[number] : undefined}
					number={number}
					over={over}
					stepNext={stepNext}
					onClickAnswer={onClickAnswer}
					score={score}
				/>
			</Main>
			<Bottom progress={progress} />
		</>
	);
}

// export const getServerSideProps = async ({ req, query, params }: GetServerSidePropsContext) => {
// 	return {
// 		props: {},
// 	};
// };
