import styled from 'styled-components';


export const ButtonContainer = styled.button`
    display: flex;
    align-items: flex-end;

    color: white;
    font-size: 18px;
    font-weight: 400;
    border-color: white;

    span {
        margin-bottom: 6px;
        padding-bottom: 3px;
        border-bottom: 1px solid;
    }

    @media screen and (min-width: 1200px) {
        justify-content: center;
        width: 135px;
    }

    @media screen and (min-width: 1400px) {
        width: 201px;
    }
`;