import styled from 'styled-components';
import svgDots from '../../assets/images/svg/grey-dot.svg';
import backgroundImage from '../../assets/images/image10.jpg';


export const TeamPageContainer = styled.main`
    position: relative;
`;

export const PreviewContainer = styled.div`
    background: #0000004C no-repeat center/cover url(${backgroundImage});
    background-blend-mode: darken;

    .container {
        height: 980px;
        max-height: 90vh;
        min-height: 430px;

        display: grid;
        place-content: center;
        place-items: center;

        position: relative;
    }

    button {
        width: 187px;
        height: 53px;
        padding-top: 3px;
        font-weight: 400;

        color: white;
        font-size: 14px;
        border: 1px solid #E9DF00;

        position: relative;

        &::before {
            display: block;
            height: 53px;
            width: 187px;
            position: absolute;
            top: 3px;
            left: -5px;
            content: '';
            border: 1px solid #E9DF00;
        }
    }

    .dots {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 35px;
        width: 100%;
        max-width: 320px;
        height: 20px;
        background: repeat left top / auto 50% url(${svgDots});
    }
`;

export const TeamContainer = styled.div`
    padding-bottom: 70px;

    position: relative;
    top: -80px;

    @media screen and (min-width: 1200px) {
        padding-bottom: 80px;
    }

    @media screen and (min-width: 1200px) {
        padding-left: 46px;
        margin: 0 auto;
        max-width: 766px;
    }
    
    @media screen and (min-width: 1400px) {
        max-width: 860px;
    }
`;