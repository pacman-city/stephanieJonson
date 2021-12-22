import styled from 'styled-components';
import {experienceStyles} from '../../../../global.styles';


export const ExperienceContainer = styled.div`
    ${experienceStyles}

    .content {
        display: grid;
        grid-row-gap: 20px;
        grid-auto-flow: column;
        grid-template: repeat(2, auto) auto repeat(2, auto) / 200px;
        justify-content: center;
    }

    @media (min-width: 768px) {
        .content {
            padding: 0 100px;
            grid-template: repeat(2, auto) / 1fr 1fr;
            row-gap: 170px;
        }
    }

    @media (min-width: 1200px) {
        .content {
            padding: 0 75px;
        }
    }
`;