import styled from 'styled-components';
import svg from '../../../../assets/images/svg/grey-dot.svg';
import svgMask from '../../../../assets/images/svg/sidebar-mask.svg';


export const PreviewContainer = styled.div`
    background: #00000059;

    .wrapper {
        height: 1000px;
        min-height: 500px;
        max-height: 100vh;
        max-width: 1920px;
        margin: 0 auto;
        position: relative;
    }

    .backdrop-slider {
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        
        .swiper {
            height: inherit;
        }
        
        .swiper-slide {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center right 50%;
        }
    }

    .container {
        height: 100%;
        display: grid;
        grid-template: 1fr auto / 1fr;
        align-content: space-between;

        position: relative;
        background: #00000059;
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
        .wrapper {
            &::before {
                position: absolute;
                z-index:1;
                right: 0;
                top: 0;
                content: '';
                width: 125px;
                height: 250%;
                background: no-repeat center top 300px/125px auto url(${svgMask});
            }
        }

        .container {
            background: linear-gradient( 90deg, #00000059, #00000059 calc(100% - 125px), transparent calc(100% - 125px));
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
        .wrapper {
            height: 744px;
            max-height: unset;

            &::before {
                display: none;
            }
        }

        .container {
            background: linear-gradient( 90deg, #00000059, #00000059 calc(100% - 160px), transparent calc(100% - 160px));
        }
        
        .content-title {
            height: 204px;
        }
    }

    @media (min-width: 1400px) {
        .container {
            background: linear-gradient( 90deg, #00000059, #00000059 calc(100% - 226px), transparent calc(100% - 226px));
        }
    }
`;