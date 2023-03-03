import reset from 'styled-reset'; // style-reset 패키지
import { createGlobalStyle } from 'styled-components';

// GlobalStyles 설정
const GlobalStyles = createGlobalStyle` 
    ${reset}

    @font-face {
        font-family: "Pretendard";
        src: url('/fonts/Pretendard-Thin.woff2') format('woff2'), 
          url('/fonts/Pretendard-Thin.woff') format('woff');
        font-weight: 100;
    }
    @font-face {
        font-family: "Pretendard";
        src:url('/fonts/Pretendard-ExtraLight.woff') format('woff2'), 
         url('/fonts/Pretendard-ExtraLight.woff2') format('woff');
        font-weight: 200;
    }
    @font-face {
        font-family: "Pretendard";
        src:url('/fonts/Pretendard-Light.woff2') format('woff2'), 
         url('/fonts/Pretendard-Light.woff') format('woff');
        font-weight: 300;
    }
    @font-face {
        font-family: "Pretendard";
        src:url('/fonts/Pretendard-Regular.woff2') format('woff2'), 
         url('/fonts/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
    }
    @font-face {
        font-family: "Pretendard";
        src:url('/fonts/Pretendard-Medium.woff2') format('woff2'), 
         url('/fonts/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
    }
    @font-face {
        font-family: "Pretendard";
        src:url('/fonts/Pretendard-SemiBold.woff2') format('woff2'), 
         url('/fonts/Pretendard-SemiBold.woff') format('woff');
        font-weight: 600;
    }
    @font-face {
        font-family: "Pretendard";
        src:url('/fonts/Pretendard-Bold.woff2') format('woff2'), 
         url('/fonts/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
    }
    @font-face {
        font-family: "Pretendard";
        src:url('/fonts/Pretendard-ExtraBold.woff2') format('woff2'), 
         url('/fonts/Pretendard-ExtraBold.woff') format('woff');
        font-weight: 800;
    }
    @font-face {
        font-family: "Pretendard";
        src:url('/fonts/Pretendard-Black.woff2') format('woff2'), 
         url('/fonts/Pretendard-Black.woff') format('woff');
        font-weight: 900;
    }

    html,
    body {
      padding: 0;
      margin: 0;
    }
    html{
      font-size: 21px; //10px
    }
    @media (min-width: 767px){
      html{
        font-size: 16px;
      }
    }
    @media (max-width: 320px){
      html{
        font-size: 14px;
      }
    }

    body{
      font-size: 21px;
    }
    body a {
      color: inherit;
      text-decoration: none;
    }
    body em{
      font-style: normal;
    }
    body ul, body li{
      list-style: none;
    }
    //icon용
    body i{
      display: flex;
      align-items: center;
    }
    //이미지 렌더링 오류 수정
    body img{
      image-rendering: -webkit-optimize-contrast;
      transform: translateZ(0);
      backface-visibility: hidden;
    }
    body b{
      font-weight: bold;
    }
    body * {
      line-height: 1;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: 'Pretendard','sans-serif';
    }
    body input,  body textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    body input:focus {
      outline: none;
    }
    body button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;
