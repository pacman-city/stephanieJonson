import styled from 'styled-components';
import svg from '../../../../assets/images/svg/grey-dot.svg';
import svgMask from '../../../../assets/images/svg/sidebar-mask.svg';


export const PreviewContainer = styled.div`
    height: 1000px;
    min-height: 500px;
    max-height: 100vh;

    position: relative;

    .backdrop-slider {
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        
        .swiper {
            height: inherit;
        }
        
        .swiper-slide {
            background-repeat: no-repeat;
            background-color: #0000005A;
            background-size: cover;
            background-position: center right 50%;
            background-blend-mode: darken;
        }
    }

    .container {
        height: 100%;
        display: grid;
        grid-template: repeat(3, auto) / 1fr;
        align-content: space-between;
    }

    .content {
        align-self: center;
        padding-top: 20px;
    }

    .content-title {
       height: 162px;
        opacity: 0;
        animation: fade-in 0.9s linear 0.1s forwards;
        @keyframes fade-in {
            to {
                opacity: 1;
            }
        }
    }

    h1 {
        max-width: 250px;
    }

    p {
        margin-top: 20px;
        max-width: 245px;
        font-size: 15px;
        color: white;
        line-height: 1.4;
    }

    .button-sqr {
        margin-top: 35px;
        width: 187px;
    }

    .dots {
        justify-self: center;
        width: 100%;
        max-width: 320px;
        height: 40px;
        padding-bottom: 20px;
        background: url(${svg});
        background-clip: content-box;
    }

    @media (min-width: 768px) {
        &::before {
            position: absolute;
            right: 0;
            top: 0;
            content: '';
            width: 125px;
            height: 250%;
            background: no-repeat center top 300px/125px auto url(${svgMask});
        }

        .backdrop-slider .swiper-slide {
            background-blend-mode: unset;
        }

        .container {
            position: relative;

            &::before {
                position: absolute;
                left: 0;
                top: 0;
                content: '';
                display: block;
                height: 100%;
                width: calc(100% - 125px);
                background-color: #00000059;
            }
        }

        .content-title {
            height: 184px;
        }

        h1 {
            max-width: 385px;
        }

        p {
            font-size: 17px;
            max-width: unset;
        }
    }

    @media (min-width: 1200px) {
        height: 744px;
        max-height: unset;

        &::before {
            display: none;
        }

        .container::before {
            right: 160px;
            left: unset;
        }

        .content-title {
            height: 204px;
        }
    }
    
    @media (min-width: 1400px) {
        .container::before {
            width: 250%;
            right: 205px;
        }
    }
`;