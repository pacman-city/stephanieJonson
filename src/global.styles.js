import { createGlobalStyle, css } from 'styled-components';
import NTR from './assets/fonts/NTR-Regular.woff';
import Gilroy400 from './assets/fonts/Gilroy-Regular.woff';
import Gilroy500 from './assets/fonts/Gilroy-Medium.woff';
import Gilroy600 from './assets/fonts/Gilroy-SemiBold.woff';
import Gilroy700 from './assets/fonts/Gilroy-Bold.woff';
import Gilroy900 from './assets/fonts/Gilroy-Black.woff';
import arrowRight from './assets/images/svg/arrow-right.svg';
import arrowLeft from './assets/images/svg/arrow-left.svg';
import lineHorizontal from './assets/images/svg/line-horizontal-gold.svg';


export const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    html,
    body {
        height: 100%;
        margin: 0;
    }

    body {
        font-size: 16px;
        font-family: Gilroy;
        font-style: normal;
        color: #2F3438;
        line-height: normal;
        background: #EDEDED;
    }

    main {
        margin: 0 auto;
    }

    .app {
        position: relative;
    }

    img,
    svg {
        display: block;
        max-height: 100%;
        max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    li {
        margin: 0;
        padding: 0;
    }

    h1 {
        text-transform: uppercase;
        font-family: NTR;
        color: white;
        font-size: 50px;
        font-weight: normal;
        line-height: 100%;

        @media (min-width: 768px) {
            font-size: 70px;
        }

        @media (min-width: 992px) {
            font-size: 80px;
        }
    }

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-family: NTR;
        font-size: 40px;
        color: #2F3438;
        font-weight: normal;
        line-height: 100%;
        
        @media screen and (max-width: 320px) { 
            font-size: 32px;
        }
    }

    ul {
        list-style: none;
    }

    a,
    button,
    input,
    textarea,
    select {
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
    }

    a {
        display: block;
        font-family: Gilroy;
        font-style: normal;
        color: inherit;
        text-decoration-skip-ink: none;
        text-decoration: none;
    }

    button{
        display: block;
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;

        font-family: Gilroy;
        font-style: normal;
        font-weight: 700;
    }

    .button-sqr {
        padding: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background-color: transparent;
        cursor: pointer;

        font-family: Gilroy;
        font-style: normal;
        font-weight: 700;
        color: #BF9C24;
        font-size: 15px;
        border: 2px solid white;
        text-transform: uppercase;
        position: relative;
        padding-right: 25px;

        &::after {
            content: url(${lineHorizontal});
            margin-bottom: 3px;
            position: absolute;
            right: -25px;
            display: block;
            width: 50px;
            line-height: 0;
        }
    }

    .container {
        padding-left: 10px;
        padding-right: 10px;

        @media (min-width: 768px) {
            padding-left: 15px;
            padding-right: 15px;
        }

        @media (min-width: 992px) {
            padding-left: 21px;
            padding-right: 21px;
        }

        @media (min-width: 1200px) {
            padding-left: 226px;
            padding-right: 180px;
        }

        @media (min-width: 1400px) {
            margin: 0 auto;
            max-width: 1920px;
            padding-right: 226px;
        }
    }

    .header-logo {
        visibility: hidden;

        @media screen and (min-width: 355px) {
            visibility: visible;
            padding-top: 30px;
            justify-self: center;

            font-size: 18px;
            line-height: 1;
            font-weight: 500;
            color: white;

            &:after {
                content: '.';
                color: #BF9C24;
                font-size: 28px;
                line-height: 0;
            }
        }

        @media screen and (min-width: 768px) {
            padding-top: 33px;
            font-size: 24px;
            position: relative;

            &:after {
                font-size: 35px;
            }
        }
    }

    @font-face {
        font-family: 'NTR';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: local('Noto Sans Regular'),
            url(${NTR}) format('woff');
    }

    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy Regular'), local('Gilroy-Regular'),
            url(${Gilroy400}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy Medium'), local('Gilroy-Medium'),
            url(${Gilroy500}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy SemiBold'), local('Gilroy-SemiBold'),
            url(${Gilroy600}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy Bold'), local('Gilroy-Bold'),
            url(${Gilroy700}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy Black'), local('Gilroy-Black'),
            url(${Gilroy900}) format('woff');
        font-weight: 900;
        font-style: normal;
    }
`;


export const paginationStyles = css`
    .swiper-pagination{
        bottom: 40px;
    }

    .swiper-pagination-bullet {
        transform: none;
        font-size: 20px;
        font-weight: 500;

        border-radius: unset;
        height: 30px;
        width: 30px;
        background: unset;
    }

    .swiper-pagination-bullet-active {
        color: #BF9C24;
        font-weight: 700;
    }

    .swiper-pagination-bullet-active-prev-prev,
    .swiper-pagination-bullet-active-next-next {
        color: #40423B33;
        opacity: 1;
    }

    .swiper-pagination-bullet-active-prev,
    .swiper-pagination-bullet-active-next {
        opacity: 1;
        color: #40423B99;
    }

    .swiper-button-prev,
    .swiper-button-next {
        top: unset;
        bottom: 40px;
        padding-top: 5px;
        
        &::after {
            line-height: 0;
        }
    }

    .swiper-button-prev::after {
        content: url(${arrowLeft});
    }

    .swiper-button-next::after {
        content: url(${arrowRight});
    }
`;