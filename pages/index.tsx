import Main from "@/components/layouts/Main";
import { GetServerSidePropsContext } from "next";
import styled from "styled-components";
import { useRouter } from "next/router";
import { IoArrowForward } from "react-icons/io5";
import { clipboard } from "@/utils/clipboard";
import { ButtonCommon } from "@/styles/common";
import Clipboard from "@/components/common/Clipboard";

interface IProps {
  refUrl: string | null;
}

export default function Home({ refUrl }: IProps) {
  const router = useRouter();

  const goToStart = () => {
    alert("시작합니다.");
    router.push(`/quiz?ref=${refUrl}`, "/quiz");
  };

  const copyUrl = () => {
    const url = window.document.location.href;
    clipboard(url);
  };
  return (
    <>
      <Main>
        <ContentWrap>
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
              <br /> 지식은 시험이 끝나면 두뇌에서 사라진다. 따라서 <br /> 배운 지식을 배운 대로 떠드는 것은 개 짖는 소리와 <br /> 다를 바
              없다.
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
              <Clipboard onClickUrl={copyUrl} />
            </div>
          </div>
          <div className="copyright">© Made In YOO GUK HYEON.</div>
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
          content: "";
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
        content: "";
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
      ${ButtonCommon}
    }
  }

  .copyright {
    margin: 30px 0;
    text-align: center;
    color: #cbcbcb;
    font-size: 14px;
  }
`;
