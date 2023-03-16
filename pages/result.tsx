import Main from '@/components/layouts/Main';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GetServerSidePropsContext } from 'next';
import styled from 'styled-components';
interface IProps {
	score: string;
}

export default function Result({ score }: IProps) {
	return (
		<>
			<Main>
				<ResultWrap>
					<h2>당신의 최종결과는?</h2>
					<div>
						<Image src="/img/result.png" width={3000} height={3000} layout="responsive" alt="이미지" />
					</div>
					<div className="scoreNum">
						<b>
							정답 <br /> {score}
						</b>
					</div>
				</ResultWrap>
			</Main>
		</>
	);
}

export const getServerSideProps = async ({ req, query, params }: GetServerSidePropsContext) => {
	const score: string | string[] | undefined = query?.score ? query?.score : '0';

	return {
		props: { score },
	};
};

const ResultWrap = styled.div`
	h2 {
		color: #252525;
		font-weight: 900;
		font-size: 36px;
		word-spacing: 0.5px;
	}

	.scoreNum {
		z-index: 2;
		position: relative;
		text-align: center;

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
`;
