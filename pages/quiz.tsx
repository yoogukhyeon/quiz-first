import React, { useEffect, useState } from 'react';
import Main from '@/components/layouts/Main';
import styled from 'styled-components';
import { Top } from '@/components/layouts/Top';
import { Bottom } from '@/components/layouts/Bottom';
import { GetServerSidePropsContext } from 'next';
import QuizeList from '@/components/quiz/QuizeList';
import axios, { AxiosError, AxiosResponse } from 'axios';
interface QuizList {
	questionNo: number;
	question: string;
	correct_answer: string;
	answer: string[];
}

export interface QuizState extends QuizList {
	answer: string[];
}

export interface UserChk {
	correct: boolean;
	answer: string;
	correctAnswer: string;
}

interface IProps {
	id: number;
	quizList: QuizList[];
}

export default function Quiz({ id, quizList }: IProps) {
	const [data, setData] = useState<QuizState[]>([]);
	const [number, setNumber] = useState<number>(0);
	const [score, setScore] = useState(0);
	const [total, setTotal] = useState<number>(10);
	const [userChk, setUserChk] = useState<UserChk[]>([]);
	const [over, setOver] = useState<boolean>(false);
	const [stepNext, setStepNext] = useState<boolean>(false);

	useEffect(() => {
		setData(quizList);
		setTotal(quizList.length);
	}, [quizList]);

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
	}, [total, number, over]);

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
					id={id}
				/>
			</Main>
			<Bottom progress={progress} />
		</>
	);
}

export const getServerSideProps = async ({ req, query, params }: GetServerSidePropsContext) => {
	const no: number = 1;
	const { ref } = query;

	console.log('process.env.NEXT_PUBLIC_DOMAIN :::', process.env.NEXT_PUBLIC_DOMAIN);
	const id = await axios.post(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/quiz/user`,
		{
			no,
			referUrl: ref,
		},
		{
			auth: {
				username: process.env.NEXT_PUBLIC_BASIC_USERNAME!,
				password: process.env.NEXT_PUBLIC_BASIC_PASSWORD!,
			},
		}
	);

	const quizList = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/quiz/${no}`, {
		auth: {
			username: process.env.NEXT_PUBLIC_BASIC_USERNAME!,
			password: process.env.NEXT_PUBLIC_BASIC_PASSWORD!,
		},
	});

	console.log('quizList :::::');
	console.log('quizList ::', quizList);
	console.log('quizList :::::');

	return {
		props: { id: id?.data?.data?.id, quizList: quizList?.data?.data },
	};
};
