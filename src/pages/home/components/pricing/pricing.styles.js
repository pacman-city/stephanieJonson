import styled from 'styled-components';
import img from '../../../../assets/images/image2.jpg';
import slideImg from '../../../../assets/images/image7.jpg';


export const PricingContainer = styled.div`
    padding-top: 70px;
    padding-bottom: 80px;
    background: no-repeat center/cover linear-gradient(#2F3438FA, #2F3438FA), url(${img});

    h2 {
        color: white;
    }

    .swiper {
        padding-top: 35px;
        padding-bottom: 40px;
    }

    .swiper-slide {
        height: 120px;
        
        background: #0000004C no-repeat center/cover url(${slideImg});
        background-blend-mode: darken;
        border-radius: 5px;
        box-shadow: 0 10px 30px 0 #0000005A;

        div {
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;

            color: white;
            padding-bottom: 10px;
            font-weight: 700;
            font-size: 24px;

            border-radius: 5px;
            border: 20px solid #BF9C244C;
            transition: border-color linear 0.2s;
        }

        &:not(.swiper-slide-active) {
            opacity: 0.5;
            background-color: #00000073;

            div {
                transition: border-color linear 0.15s;
                border: 25px solid transparent;
            }
        }
    }

    .cards {
        padding: 0 10px;
        display: grid;
        justify-items:center;
        grid-gap: 10px;
    }

    .card {
        width: 100%;
        max-width: 480px;
        display: flex;

        border-radius: 5px;
        border: 1px solid #BF9C2480;
        box-shadow: 0 10px 30px 0 #00000040;

        background-color: #2F3438;

        img {
            width: 100px;
            object-fit: cover;
            border-radius: 5px 0 0 5px;
        }
    }

    .card-content {
        flex-grow: 1;
        padding: 10px 15px;
        color: white;
    }

    .procedure-name{
        font-family: NTR;
        font-size: 26px;
        line-height: 1;

        span {
            display: block;
            margin-top: 5px;

            font-size: 15px;
            font-weight: 500;
            font-family: Gilroy;
        }
    }

    .price {
        margin-top: 12px;
        font-size: 20px;
        color: #BF9C24;
    }

    .button-sqr {
        margin: 40px auto 0;
        width: 187px;
    }

    @media screen and (min-width: 768px) {
        .swiper {
            padding-bottom: 60px;
        }

        .cards {
            padding: 0 15px;
            grid-gap: 20px;
        }

        .card-content {
            padding: 20px;
            display:flex;
            align-items: center;
            justify-content: space-between;
            color: white;
        }

        .price {
            margin-top: 0;
            font-size: 25px;
        }
    }

    @media screen and (min-width: 992px) {
        .cards {
            padding: 0 21px;
            display: grid;
            justify-content: center;
            grid-template-columns: repeat(2, minmax(auto, 480px));
            grid-column-gap: 15px;
        }
    }

    @media screen and (min-width: 992px) {
        padding: 100px 0;
    }

    @media screen and (min-width: 1200px) {
        .wrapper {
            padding: 0 180px 0 226px;
        }

        .swiper {
            margin-left: 30px;
            margin-right: 30px;
        }

        .slider{
            position: relative;
        }

        .special-pricing-prev,
        .special-pricing-next {
            position: absolute;
            top: 35%;
            z-index: 1;
            cursor: pointer;
        }

        .special-pricing-prev {
            right: -10px;
        }
        
        .special-pricing-next {
            left: -10px;
        }

        .cards {
            padding: 0 51px;
        }
    }
    
    @media screen and (min-width: 1400px) {
        .wrapper {
            margin: 0 auto;
            max-width: 1920px;
            padding: 0 226px;
        }
    }
`;