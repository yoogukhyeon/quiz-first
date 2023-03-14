import Main from '@/components/layouts/Main';
import styled from 'styled-components';
import { IoArrowForward, IoLink } from 'react-icons/io5';
export default function Home() {
	const goToStart = () => {
		alert('시작합니다.');
	};
	return (
		<>
			<Main>
				<MbtiWrap>
					<div className="content">
						<h1>
							나의 지식
							<br />
							<b>수준</b>은 어느정도 일까?
						</h1>
						<p>
							지식이란?
							<br />
							배워서 이해하고 알아가면서 익히는 지식은 <br /> 같은 분야에 종사하지 않는 한 졸업하면 잊는다.
							<br /> 지식은 시험이 끝나면 두뇌에서 사라진다. 따라서 <br /> 배운 지식을 배운 대로 떠드는 것은 개 짖는 소리와 <br /> 다를
							바 없다.
							<br />
							<br />
							문제에 답을 고르시면 됩니다.
						</p>
						<div>
							<div className="testNum">
								<b>
									{Number(30).toLocaleString()} <em>명 참여완료</em>
								</b>
							</div>
							<button onClick={goToStart}>
								테스트 하러가기
								<i>
									<IoArrowForward />
								</i>
							</button>
						</div>
						<div className="link">
							<span>
								<i>
									<IoLink />
								</i>
							</span>
						</div>
					</div>
					<div className="copyright">© Made In YOO GUK HYEON.</div>
				</MbtiWrap>
			</Main>
		</>
	);
}

const MbtiWrap = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

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

				em {
					display: block;
					margin-left: 2px;
					font-size: 16px;
					color: #aaaaaa;
					line-height: 18px;
				}
			}
		}

		button {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 75px;
			margin: 20px 3px;
			border-radius: 7px;
			padding: 5px 25px;
			color: #fff;
			background-color: #09a334;
			font-size: 22px;
			font-weight: 600;
		}

		.link {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 10px 0;
			span {
				border-radius: 50%;
				display: inline-block;
				justify-content: center;
				align-items: center;
				padding: 13px;
				background: #ececec;
				cursor: pointer;
			}
			i {
				color: #aaaaaa;
				font-size: 19px;
			}
		}
	}

	.copyright {
		margin: 30px 0;
		text-align: center;
		color: #cbcbcb;
		font-size: 14px;
	}
`;
