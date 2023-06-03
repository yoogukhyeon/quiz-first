import Main from '@/components/layouts/Main';
import { GetServerSidePropsContext } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { IoArrowForward } from 'react-icons/io5';
import { clipboard } from '@/utils/clipboard';
import { ButtonCommon } from '@/styles/common';
import Clipboard from '@/components/common/Clipboard';
import { useEffect, useState } from 'react';
import { useGetTotalQuery } from '@/api';
import Loading from '@/components/common/Loading';
import Link from 'next/link';
import KakaoAdfix from '@/components/adfit/kakaoAdfit';
import KakaoSideAdfit from '@/components/adfit/kakaoSideAdfit';
interface IProps {
	refUrl: string | null;
}

export default function Home({ refUrl }: IProps) {
	const { data: totalResult, status } = useGetTotalQuery();
	const router = useRouter();
	const [total, setTotal] = useState<number>(0);
	const [type, setType] = useState<number>();
	const [chkType, setChkType] = useState<boolean>(false);

	useEffect(() => {
		setTotal(totalResult?.total);
	}, [totalResult]);

	const goToStart = () => {
		if (chkType) {
			router.push(`/quiz?ref=${refUrl}&no=${type}`, `/quiz?no=${type}`);
		} else {
			return alert('퀴즈 유형을 선택해주세요.');
		}
	};

	const copyUrl = () => {
		const url = window.document.location.href;
		clipboard(url);
	};

	const onClickType = (e: React.MouseEvent<HTMLInputElement>) => {
		const typeNum = e.currentTarget.value;
		setType(Number(typeNum));
		setChkType(true);
	};

	if (status === 'loading') {
		return <Loading />;
	}

	return (
		<>
			<Main>
				<ContentWrap>
					<KakaoAdfix />

					<KakaoSideAdfit />

					<div className="content">
						<h1>
							나의 축구 지식
							<br />
							<b>수준</b>은 어느정도 일까?
						</h1>

						<p>
							지식이란?
							<br />
							배워서 이해하고 알아가면서 익히는 지식은 <br /> 같은 분야에 종사하지 않는 한 졸업하면
							잊는다.
							<br /> 지식은 시험이 끝나면 두뇌에서 사라진다. 따라서 <br /> 배운 지식을 배운 대로 떠드는
							것은 개 짖는 소리와 <br /> 다를 바 없다.
							<br />
							<br />
							문제에 답을 고르시면 됩니다.
						</p>
						<div>
							<div className="testNum">
								<b>
									{total} <em>명 참여완료</em>
								</b>
							</div>
							<Category>
								<input type="radio" value={1} id="type1" name="type" onClick={onClickType}></input>
								<label htmlFor="type1">축구퀴즈1</label>
								<input type="radio" value={2} id="type2" name="type" onClick={onClickType}></input>
								<label htmlFor="type2">축구퀴즈2</label>
							</Category>
							<Button onClick={goToStart}>
								테스트 하러가기
								<i>
									<IoArrowForward />
								</i>
							</Button>
							<Clipboard onClickUrl={copyUrl} />
						</div>
					</div>
					<div className="copyright">
						© Made In YOO GUK HYEON. <br />
						CONTACT: rnrgus5897@gmail.com
					</div>

					<Button diff={'commnity'}>
						<Link href={`https://www.fnfsoccer.com`} passHref target="_blank">
							축구 커뮤니티 바로가기
							<i>
								<IoArrowForward />
							</i>
						</Link>
					</Button>
				</ContentWrap>
			</Main>
		</>
	);
}

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
	let { referer } = req.headers;
	const refUrl: string | null = referer ? referer : null;
	return {
		props: { refUrl },
	};
};

const ContentWrap = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 0 50px;

	> .content {
		h1 {
			color: #252525;
			font-weight: 900;
			font-size: 36px;
			word-spacing: 0.5px;

			b {
				position: relative;
				display: inline-block;
				color: #09a334;
				padding: 4px 4px;
				font-weight: 900;
				::after {
					position: absolute;
					bottom: 3px;
					left: 0;
					content: '';
					display: block;
					width: 100%;
					height: 10px;
					background: #09a334;
					opacity: 0.5;
				}
			}
		}

		p {
			color: #aaaaaa;
			font-weight: 500;
			font-size: 17px;
			line-height: 23px;
			margin: 35px 3px;
		}

		.testNum {
			z-index: 2;
			position: relative;
			text-align: center;
			font-size: 18px;

			::after {
				z-index: -1;
				position: absolute;
				top: 50%;
				left: 0;
				content: '';
				display: block;
				width: 100%;
				height: 1px;
				transform: translateY(-50%);
				background: #cbcbcb;
			}

			> b {
				display: inline-flex;
				justify-content: center;
				background: #fff;
				padding: 0 3px;
				font-weight: 600;
				color: rgb(9, 163, 52);
				em {
					display: block;
					margin-left: 2px;
					font-size: 16px;
					color: #aaaaaa;
					line-height: 18px;
				}
			}
		}
	}

	.copyright {
		margin: 30px 0;
		text-align: center;
		color: #cbcbcb;
		font-size: 14px;
		line-height: 20px;
	}
`;

interface IButton {
	diff?: string;
	noSpace?: boolean;
}

const Button = styled.button<IButton>`
	${ButtonCommon}
	background-color: ${(props) =>
		`${props.diff === 'commnity' ? '#85b8cb' : props.diff === 'rending' ? '#1d6a96' : '#09a334'}`};
	margin: ${(props) => `${props.noSpace && '0'}`};

	> a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
`;

const Category = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-top: 20px;

	:nth-child(1) {
		background-color: rgb(230, 230, 240);
	}
	:nth-child(2) {
		flex-grow: 1;
	}

	> input {
		position: absolute;
		top: 0;
		left: -80px;
		display: none;
	}

	> label {
		width: 50%;
		background-color: rgb(41, 41, 63);
		height: 55px;
		line-height: 55px;
		text-align: center;
		color: #fff;
		font-size: 18px;
		font-weight: 600;
		cursor: pointer;
		border-radius: 7px;
	}

	input:checked + label {
		background-color: rgb(230, 230, 240);
		color: #161616;
	}
`;
