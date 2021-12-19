import styled from 'styled-components';


export const TeamContainer = styled.div`
    padding: 80px 0 65px;

    @media screen and (min-width: 768px) {
        padding: 65px 0 80px;

        h2 {
            margin-bottom: 40px;
        }
    }
    
    @media screen and (min-width: 1200px) {
        padding: 90px 0;
    }
`;