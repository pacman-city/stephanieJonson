import styled, {css} from 'styled-components';
import svg from '../../../../assets/images/svg/gold-dot.svg';
import svg1 from '../../../../assets/images/svg/line-horizontal-gold.svg';
import arrowUp from '../../../../assets/images/svg/arrow-up.svg';
import arrowDown from '../../../../assets/images/svg/arrow-down.svg';
import img from '../../../../assets/images/image5.jpg';

import {paginationStyles} from '../../../../global.styles';


const sliderSlide = css`
    background: no-repeat center/cover url(${img});
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 #00000040;

    div {
        background: none;
        height: 100%;
        border-radius: 5px;
    }

    span {
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        color: white;
        line-height: 0;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: -14px;

        border-radius: 5px;
        border: 25px solid #BF9C244C;
        transition: border-color linear 0.5s;
    }

    &.swiper-slide-active{
        background-blend-mode: darken;
        background-color: #00000040;

        @media screen and (min-width: 768px) {
            animation: background-fade 0.5s linear forwards;
    
            @keyframes background-fade {
                from {
                    background-color: #fff;
                }
    
                to {
                    background-color: #00000040;
                }
            }
        }
    }

    &:not(.swiper-slide-active) {
        div {
            background: no-repeat linear-gradient(#DEDEDECC, #DEDEDECA 50%, #0000);
        }

        span {
            transition: border-color ease-out 0.7s;
            border: 25px solid transparent;
        }
    }
`;

const sliderContentSlide = css`
    height: inherit;
    padding: 0 10px 50px;
    display: flex;
    flex-direction: column;

    div{
        flex-grow: 1;
    }

    p {
        display: inline;
        font-size: 14px;
        line-height: 24px;
        color: #40423B;

        &::after {
            display:inline-block;
            content: '';
            width: 10px;
        }
    }

    span {
        margin-top: 20px;
        font-size: 20px;
        font-weight: 500;
        color: #2F3438;

        &::before {
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            margin-bottom: 3px;
            content: '';
            background: no-repeat url(${svg1});
            width: 50px;
            height: 3px;
        }
    }
`;

export const TestimonialsContainerMobile = styled.div`
    padding-top: 70px;
    padding-bottom: 80px;

    h2 {
        margin-bottom: 50px;
    }

    .slider {
        .swiper{
            padding-bottom: 15px;
            background: url(${svg});
            background-clip: content-box;
        }

        .swiper-wrapper {
            padding-top: 13px;
            padding-bottom: 13px;
        }

        .swiper-slide {
            height: min(44vw, 250px);

            ${sliderSlide}
        }
    }

    .slider-content {
        .swiper-wrapper{
            padding-bottom: 40px;
            height: inherit;
        }
        
        .swiper-slide {
           ${sliderContentSlide}
        }

        ${paginationStyles}

        .swiper-pagination{
            bottom: 30px;
        }

        .swiper-button-prev,
        .swiper-button-next {
            bottom: 25px;
        }
    }

    .button-sqr {
        margin: 0 auto;
        width: 217px;
    }
`;

export const TestimonialsContainer = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 80px;

    .wrapper {
        display: grid;
        grid-template: 700px / 270px calc(100% - 270px);
        background: url(${svg});
        background-clip: content-box;
    }

   .slider {
        .swiper{
            height: 100%;
            width: 100%;
            padding: 15px;
        }

        .swiper-slide {
            user-select:none;
           ${sliderSlide}
        }
    }

    .slider-content {
        padding: 40px 0 40px 20px;
        align-self: center;
        background: #EDEDED;

        h2 {
            text-align: left;
            margin-bottom: 40px;
        }

        .swiper{
            height: 250px;
        }

        .swiper-slide {
            ${sliderContentSlide}

            padding: 0 80px 0 0;
            background: #EDEDED;
        }

        ${paginationStyles}

        .swiper-pagination {
            transform: rotate(90deg);
            left: unset;
            bottom: unset;
            right: -60px;
            top: 44.5%;
        }

        .swiper-pagination-bullet {
            transform: rotate(-90deg);
        }

        .swiper-button-prev,
        .swiper-button-next {
            right: 20px;
            left: unset;
        }

        .swiper-button-prev {
            top: 20px;
            &::after{
                content: url(${arrowUp});
            }
        }
        
        .swiper-button-next {
            bottom: 0;
            &::after{
                content: url(${arrowDown});
            }
        }
    }

    .button-sqr {
        margin: 50px 0 0;
        width: 217px;
    }

    @media screen and (min-width: 992px) {
        .slider .swiper{
            padding-left: 21px;
        }
    }

    @media screen and (min-width: 1200px) {
        padding-left: 226px;
        
        .slider-content {
            .swiper-slide {
                padding-right: 270px;
            }

            .swiper-pagination {
                right: 145px;
            }

            .swiper-button-prev,
            .swiper-button-next {
                right: 227px;
            }
        }
    }

    @media screen and (min-width: 1400px) {
        .slider-content {
            .swiper-slide {
                padding-right: 440px;
            }
            
            .swiper-pagination {
                right: 275px;
            }

            .swiper-button-prev,
            .swiper-button-next {
                right: 357px;
            }
        }
    }
`;