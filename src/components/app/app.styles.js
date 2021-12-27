import styled from 'styled-components';


export const AppContainer = styled.div`
    @media screen and (min-width: 1199.98px) {
        display: grid;
        grid-template: 1fr / 1fr minmax(auto, 1510px) 1fr;

        main {
            grid-area: 1 / 1 / -1 / -1;
        }
    }
`;