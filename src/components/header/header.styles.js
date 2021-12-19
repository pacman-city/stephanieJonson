import styled from 'styled-components';
import svgMask from '../../assets/images/svg/sidebar-mask.svg';
import svgMaskShadow from '../../assets/images/svg/sidebar-mask-shadow.svg';


export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;

    .header-content {
        padding: 20px 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .menu-btn {
        color: white;
    }

    .cart {
        display: flex;
        align-items: flex-end;
        color: white;

        span {
            margin-left: 3px;
            font-size: 18px;
            font-weight: 400;
            line-height: 1;
        }
    }

    @media screen and (min-width: 768px) {
        .header-content {
            padding: 25px 15px 0;
        }

        .menu-btn svg{
            height: 45px;
        }

        .cart {
            svg{
                height: 35px;
            }

            span {
                font-size: 22px;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        height: 100%;
        pointer-events: none;

        .target {
            position: absolute;
            top: 0;
            left: 0;
            height: 1000px;
        }

        .wrapper {
            position: absolute;
            top: 0;
            left:0;
            height: 100%;
            width: 100%;
        }

        .bars {
            height: 100%;
            width: 100%;
            max-width: 1920px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            &.sticky {
                .side-bar-left,
                .side-bar-right {
                    backdrop-filter: blur(1px);
                    background-color:  #292C274C;
                }
            }
        }
        
        .side-bar-left {
            padding-top: 744px;
            height: 100%;
            width: 205px;

            transition: background-color 0.8s linear;
        }

        .side-bar-right {
            height: 100%;
            width: 160px;

            transition: background-color 0.8s linear;
            background-clip: content-box;

            &.open {
                .side-bar-right-image {
                    backdrop-filter: blur(3px);
                    background-image: url(${svgMaskShadow});
                }
            }
        }

        .side-bar-right-image {
            width: 100%;
            height: 100%;
            background:  repeat-y top 170px right -5px/100% auto url(${svgMask});
        }

        .header-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;

            &.sticky {
                position: fixed;

                .header-container{
                    opacity: 0;

                    animation: sticky-fade-in 0.4s linear 0.1s forwards;

                    @keyframes sticky-fade-in {
                        to {
                            opacity: 1;
                        }
                    }
                }

                .header-col {
                    display: grid;
                    grid-template: repeat(2, 65px) / 160px;
                }

                .cart {
                    padding-left: 30px;
                    justify-self: start;
                    order: 1;

                    span {
                        margin-right: 0;
                    }
                }

                .menu-container::before {
                    width: 205px;
                    height: 100vh;
                }
            }
        }

        .header-container {
            margin: 0 auto;
            height: 744px;
            max-width: 1920px;
            padding: 0;
            align-items: flex-start;
            justify-content: flex-end;

            position: relative;
        }

        .header-content {
            padding: 25px 0 0;
            align-items: flex-start;
            z-index:1;
            position: relative;
        }

        .header-logo-image {
            margin-left: 15px;
            height: 45px;
            width: 45px;
        }

        .header-col {
            display: grid;
            grid-template-columns: 200px 160px;
        }

        .cart {
            justify-self: end;
            align-self: start;
            pointer-events: all;

            span {
                margin-left: 6px;
                margin-right: 20px;
            }
        }

        .menu-btn {
            margin-left: 30px;
            pointer-events: all;
        }
    }

    @media screen and (min-width: 1400px) {
        .side-bar-right {
            width: 205px;
        }

        .side-bar-right-image {
            background:  repeat-y top 200px right -5px/100% auto url(${svgMask});
        }

        .header-col {
            grid-template-columns: 200px 205px;
        }

        .header-wrapper.sticky .header-col {
            grid-template: repeat(2, 65px) / 180px;
        }
    }
`;