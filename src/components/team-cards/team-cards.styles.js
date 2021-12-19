import styled from 'styled-components';


export const TeamCardsContainer = styled.div`
    margin:0 auto;
    max-width: 720px;

    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    grid-row-gap: 50px;

    @media screen and (min-width: 992px) {
        max-width: 860px
    }
`;