import styled from 'styled-components';
import {experienceStyles} from '../../../../global.styles';


export const ExperienceContainer = styled.div`
    ${experienceStyles}

    .content {
        display: grid;
        grid-row-gap: 20px;
        grid-auto-flow: column;
        grid-template: repeat(3, auto) auto repeat(3, auto) / 200px;
        justify-content: center;
    }

    @media (min-width: 768px) {
        position: relative;
        z-index: 1;

        .content {
            margin: 0 auto;
            max-width: 1350px;
            grid-template: repeat(3, auto) / 1fr 1fr;
            row-gap: 40px;
        }

        .experinece-item {
            &:first-of-type,
            &:nth-of-type(3) {
                margin-left: 80px;
            }

            &:nth-of-type(5),
            &:last-of-type {
                margin-right: 80px;
            }
        }
    }

    @media (min-width: 1200px) {
        position: static;
    }
`;