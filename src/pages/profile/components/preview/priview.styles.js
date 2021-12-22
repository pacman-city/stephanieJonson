import styled from 'styled-components';
import dots from '../../../../assets/images/svg/gold-dot.svg';


export const PreviewContainer = styled.div`
    padding-bottom: 75px;

    .header-logo {
        color: #BF9C24;
    }

    .breadcrumbs {
        margin-top: 40px;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 12px;
        color: #BBB;
        text-align: center;
    }

    h1 {
        margin-bottom: 7px;
        font-family: Norican;
        font-size: 26px;
        color: #BF9C24;
        text-align: center;
        text-transform: unset;
    }

    h2 {
        color: #000;
        margin-bottom: 30px;
    }

    h3 {
        margin-top: 20px;
        font-family: NTR;
        font-weight: 400;
        line-height: 1;
        font-size: 28px;
        text-align: center;
        text-transform: uppercase;
    }

    b {
        display: block;
        margin-top: 10px;
        color: #BF9C24;
        text-align: center;
        text-transform: uppercase;
    }

    .button-sqr {
        margin: 20px auto 30px;
        width: 198px;
    }

    h4 {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 17px;
    }

    .row {
        padding-bottom: 30px;
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 160px));
        justify-content: center;
        grid-gap: 20px;

        span {
            display: block;
            margin-bottom: 7px;
            font-size: 14px;
        }
    }

    address {
        margin-bottom: 35px;
        font-size: 16px;
        font-style: normal;

        grid-column: span 2 ;
    }

    .space::after {
        display: inline-block;
        content: '';
        width: 10px;
    }

    .dots {
        margin-bottom: 30px;
        height: 34px;
        background: url(${dots});
    }

    @media screen and (min-width: 576px) {
        .row {
            padding: 0;
            grid-template-columns: repeat(2, minmax(auto, 240px));
            grid-gap: 30px;
        }

        address {
            grid-column: unset ;
        }
    }

    @media screen and (min-width: 768px) {
        padding-bottom: 85px;

        .breadcrumbs {
            margin-bottom: 50px;
            font-size: 16px;
        }

        .wrapper {
            display: grid;
            grid-template: repeat(2, auto) / 1fr auto;
            grid-column-gap: 95px;
        }

        .card {
            grid-area: 1 / 2 / -1 / -1;
        }
        
        .row {
            grid-area: 2 / 1 / -1 / -1;
            grid-template-columns: repeat(2, minmax(auto, 300px));
            grid-row-gap: 40px;
            grid-column-gap: 20px;
            justify-content: start;
        }

        h1, h2 {
            text-align: left;
        }

        address {
            margin-bottom: 0;
        }

        .dots {
            margin: 40px 0;
        }
    }

    @media screen and (min-width: 992px) {
        .breadcrumbs {
            font-size: 18px;
        }

        .row {
            grid-column-gap: 100px;
        }

        .card {
            padding-right: 60px;
        }
    }

    @media screen and (min-width: 1200px) {
        padding-bottom: 110px;

        .breadcrumbs {
            margin-bottom: 40px;
        }

        h3 {
            margin-top: 30px;
        }

        .card {
            padding-right: 0;
        }

        .button-sqr {
            margin: 25px auto 0;
        }

        .wrapper {
            grid-column-gap: 55px;
        }

        .row {
            grid-template-columns: repeat(2, minmax(auto, 220px));
            grid-column-gap: 50px;
        }

        .dots {
            margin: 50px 0;
        }
    }

    @media screen and (min-width: 1400px) {
        .wrapper {
            grid-column-gap: 115px;
        }

        .row {
            padding-left: 40px;
            grid-template-columns: repeat(2, minmax(auto, 250px));
            grid-column-gap: 110px;
        }

        .about, .dots {
            margin-left: 40px;
        }
    }
`;