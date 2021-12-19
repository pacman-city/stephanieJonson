import styled from 'styled-components';
import svgBackdrop from '../../assets/images/svg/team-backdrop.svg';


export const TeamCardContainer = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 220px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
        width: 220px;
        height: 220px;

        background: no-repeat center/cover url(${svgBackdrop});
        filter: drop-shadow(0 5px 30px #00000040);
        
        img {
            padding: 15px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .name {
        margin-top: 15px;
        text-transform: uppercase;
        font-family: NTR;
        font-size: 28px;
        line-height: 1;
        text-align: center;
    }

    .position {
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

        p {
            margin-top: 20px;
            font-weight: 500;
        }

        span {
            margin-top: 7px;

            &:first-of-type {
                margin-top: 10px;
            }
        }
    }

    .button-sqr{
        align-self: flex-start;
        margin-top: 30px;
        width: calc(100% - 25px);
        height: 53px;
    }
`;