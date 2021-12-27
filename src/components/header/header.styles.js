import styled from 'styled-components';


export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;

    .wrapper {
        margin: 0 auto;
        max-width: 1920px;
        padding: 20px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .menu-btn {
        color: white;
    }

    .logo {
        display: none;
    }

    .cart {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        span {
            margin-top: 12px;
            margin-left: 3px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1;
        }
    }

    @media screen and (min-width: 355px) {
        .logo {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);

            font-size: 18px;
            color: white;

            &:after {
                content: '.';
                color: #BF9C24;
                font-size: 28px;
                line-height: 0;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .wrapper {
            padding: 25px 15px;
        }

        .logo {
            font-size: 24px;
            
            &:after {
                font-size: 35px;
            }
        }

        .cart span {
            margin-top: 8px;
            font-size: 18px;
        }
    }

    @media screen and (min-width: 1200px) {
        .wrapper {
            padding: 25px 25px;
        }

        .col {
            display: flex;
        }

        .logo {
            transform: translateX(-40%);
        }

        .cart {
            margin-right: 30px;
        }
    }

    @media screen and (min-width: 1400px) {
        .logo {
            transform: translateX(-50%);
        }
    }
`;