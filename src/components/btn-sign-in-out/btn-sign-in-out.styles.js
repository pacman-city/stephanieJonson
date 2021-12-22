import styled from 'styled-components';


export const ButtonContainer = styled.button`
    display: flex;

    color: white;
    font-size: 18px;
    font-weight: 400;
    border-color: white;
    pointer-events: all;

    span {
        margin: 8px 0 0 10px;
        border-bottom: 1.5px solid;
    }

    svg{
        color: white;
    }

    @media screen and (min-width: 768px) {
        font-size: 20px;
        
        span {
            margin: 10px 0 0 10px;
            border-width: 2px;
        }
        
        svg {
            height: 40px;
        }
    }

    @media screen and (min-width: 1200px) {
        padding-left: 20px;
        span {
            margin: 10px 0 0 10px;
            border-width: 2.5px;
        }
    }
`;