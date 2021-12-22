import styled from 'styled-components';


export const TeamCardContainer = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 220px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-top: 15px;
        text-transform: uppercase;
        font-family: NTR;
        font-size: 28px;
        font-weight: 400;
        line-height: 1;
        text-align: center;
    }

    b {
        margin-top: 8px;
        text-align: center;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        color: #BF9C24;
    }

    .stats {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        font-size: 16px;
    }

    span {
        margin-top: 7px;
    }

    p {
        margin-top: 20px;
        padding-bottom: 3px;
        font-weight: 500;
    }

    .button-sqr{
        align-self: flex-start;
        margin-top: 30px;
        width: 195px;
    }
`;