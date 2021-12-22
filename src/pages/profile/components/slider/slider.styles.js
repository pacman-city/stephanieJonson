import styled from "styled-components";
import svg from '../../../../assets/images/svg/grey-dot.svg';
import {swiperNavLg, swiperNav} from '../../../../global.styles';


export const SliderContainer = styled.div`
    padding: 80px 0 180px;

    .container {
        padding: 0;
    }

    .swiper {
        padding: 30px 0 40px;

        &::before {
            content: '';
            width: 100%;
            height: 105px;
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: url(${svg})
        }
    }

    ${swiperNav}

    .swiper-slide{
        padding: 0 8%;
    }

    img {
        margin: 0 auto;
        width: 100%;
        box-shadow: 5px 10px 20px 3px #00000033;
    }

    .button-sqr {
        margin: 0 auto;
        width: 200px;
    }

    @media screen and (min-width: 576px) {
        .swiper-slide{
            padding: 0 15%;
        }
    }
    
    @media screen and (min-width: 768px) {
        padding: 85px 0;

        .swiper-slide{
            padding: 0 20px;
        }

        ${swiperNavLg}
    }

    @media screen and (min-width: 1200px) {
        padding: 100px 0;

        .container {
            padding: 0 160px 0 205px;
        }

        .swiper {
            padding: 40px 0 45px;
        }
    }

    @media screen and (min-width: 1400px) {
        .container {
            padding: 0 205px;
        }

        .swiper-slide{
            padding: 0 40px;
        }
    }
`; 