import Main from '@/components/layouts/Main';
import React, { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import { GetServerSidePropsContext } from 'next';
import styled from 'styled-components';
import Clipboard from '@/components/common/Clipboard';
import { clipboard } from '@/utils/clipboard';
import { IoArrowForward } from 'react-icons/io5';
import { ButtonCommon } from '@/styles/common';
import { useRouter } from 'next/router';
import axios, { AxiosError, AxiosResponse } from 'axios';
interface IProps {
	score: string;
}

export default function Result({ score }: IProps) {
	const router = useRouter();

	const copyUrl = () => {
		const url = window.document.location.href;
		clipboard(url);
	};

	const goToHome = () => {
		router.push('/');
	};

	return (
		<>
			<Main>
				<ResultWrap>
					<h2>당신의 최종결과는?</h2>
					<div>
						<Image src="/img/result.png" priority={true} width={3000} height={3000} layout="responsive" alt="결과이미지" />
					</div>
					<div className="scoreNum">
						<b>
							정답 <br /> {score}
						</b>
					</div>
					<div className="desc">
						<span>조언</span>
						{Number(score) < 6 ? <p>공부를 더 하세요....</p> : <p>오호 똑똑하시네요!!!</p>}
					</div>
					<Clipboard onClickUrl={copyUrl} />

					<div className="button" onClick={goToHome}>
						돌아가기
						<i>
							<IoArrowForward />
						</i>
					</div>
				</ResultWrap>
			</Main>
		</>
	);
}

export const getServerSideProps = async ({ req, query, params }: GetServerSidePropsContext) => {
	const no = 1;
	const score: string | string[] | undefined = query?.score ? query?.score : '0';
	const id = query?.id;

	const result = await axios.post(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/quiz/result`,
		{
			id,
			no,
			score,
		},
		{
			auth: {
				username: process.env.NEXT_PUBLIC_BASIC_USERNAME!,
				password: process.env.NEXT_PUBLIC_BASIC_PASSWORD!,
			},
		}
	);

	if (result?.data?.message === 'success') {
		return {
			props: { score },
		};
	}
};

const ResultWrap = styled.div`
	& {
		text-align: center;
	}

	h2 {
		color: #252525;
		font-weight: 700;
		font-size: 36px;
		word-spacing: 0.5px;
		margin: 30px 0 0;
	}

	.scoreNum {
		z-index: 2;
		position: relative;
		text-align: center;
		padding: 10px 0;

		::after {
			z-index: -1;
			position: absolute;
			top: 50%;
			left: 0;
			content: '';
			display: block;
			width: 100%;
			height: 2px;
			transform: translateY(-50%);
			background: #09a334;
		}

		> b {
			display: inline-flex;
			justify-content: center;
			background: #fff;
			padding: 0 3px;
			font-weight: 600;
			font-size: 32px;
			line-height: 38px;
			letter-spacing: 0.8;
		}
	}

	.desc {
		z-index: 2;
		position: relative;
		text-align: center;
		padding: 20px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;

		> span {
			text-align: center;
			font-size: 24px;
			line-height: 30px;
			display: inline-block;
			position: relative;

			::after {
				z-index: -1;
				position: absolute;
				bottom: -1px;
				left: 0px;
				content: '';
				display: block;
				width: 100%;
				height: 12px;
				background: rgb(9, 163, 52);
				opacity: 0.2;
			}
		}

		> p {
			z-index: 2;
			display: inline-block;
			position: relative;
			padding: 0 3px;
			font-weight: 600;
			font-size: 28px;
			line-height: 34px;
			letter-spacing: 0.8;
			word-break: keep-all;
			color: rgb(9, 163, 52);

			::after {
				z-index: -1;
				position: absolute;
				bottom: -1px;
				left: 0px;
				content: '';
				display: block;
				width: 100%;
				height: 12px;
				background: rgb(9, 163, 52);
				opacity: 0.2;
			}
		}
	}
	.button {
		${ButtonCommon}
	}
`;
