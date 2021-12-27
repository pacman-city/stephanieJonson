import styled from 'styled-components';
import {darkSection} from '../../global.styles';
import img from '../../assets/images/image11.jpg';


export const LogInContainer = styled.main`
    padding: 100px 0 30px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;

    ${darkSection}

    .container {
        width: 200%;
        display: grid;
        grid-template: 1fr / 1fr 1fr;
        align-items: start;
        grid-gap: 20px;

        transition: transform 0.4s ease;
        ${(({view}) => view ? '' : 'transform: translateX(-50%);')}
    }

    h3 {
        color: white;
        font-weight: 400;
        font-size: 22px;
        text-align: center;
    }

    form {
        padding: 40px 10px 20px;
        display: grid;
        align-content: start;
        grid-gap: 40px;

        background-image: linear-gradient(#292C28FA, #292C28FA), url(${img});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 0 15px 30px #0000004C;

        >button {
            padding-bottom: 15px;
            color: white;
            font-weight: 400;
            font-size: 18px;
            text-align: left;

            &::before {
                content: '*';
                display: inline-block;
                vertical-align: middle;
                padding-top: 9px;
                margin-right: 8px;

                font-size: 28px;
                line-height: 0px;
            }
        }
    }

    .buttons {
        display: grid;
        grid-gap: 40px;

        button {
            padding: 14.5px;
            width: 100%;

            font-family: Gilroy;
            font-size: 18px;
            color: #A3A3A3;
            text-transform: uppercase;

            border: 1px solid #7C7C7C;
        }
    }

    @media screen and (min-width: 768px) {
        padding: 140px 0 40px;

        .container {
            grid-gap: 30px;
        }

        form {
            padding: 40px 25px 30px;
            width: 100%;
            max-width: 550px;
            justify-self: center;
        }

        h3 {
            font-size: 25px;
        }
    }

    @media screen and (min-width: 1200px) {
        min-height: 780px;
        overflow: hidden;

        .container {
            width: 100%;
            max-width: 1700px;
            transform: unset;
        }
    }
`;