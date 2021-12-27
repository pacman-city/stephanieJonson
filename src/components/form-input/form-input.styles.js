import styled, { css } from 'styled-components';


const shrink = css`
    top: -22px;
    left: 5px;
    font-size: 14px;
    color: #BF9C24;
`;

export const Group = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0 20px;
    
    font-family: NTR;
    letter-spacing: 1px;
    line-height: 2.83;
    color: white;
    font-size: 18px;

    background: transparent;
    border: 1px solid #7C7C7C;

    &:focus {
        outline: none;
    }
  
    &:focus ~ label {
        ${shrink}
    }

    &[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export const Label = styled.label`
    color: #A3A3A3;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 15px;
    transition: 350ms ease all;

    ${({ value }) => (value.length) && shrink}
`;