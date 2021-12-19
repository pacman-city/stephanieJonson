import styled from 'styled-components';
import img from '../../../../assets/images/image3.jpg';
import { paginationStyles } from '../../../../global.styles';


export const OurServiceContainer = styled.div`
    padding-top: 70px;
    padding-bottom: 80px;

    .swiper{
        padding: 35px 10px 100px;
        height: 465px;
    }
    
    ${paginationStyles}

    @media screen and (max-width: 768px) {
        .container {
            padding: 0;
        }
    }

   .card {
        height: 100%;
        border-radius: 5px;
        padding: 15px;
        background: #0000004C no-repeat center/cover url(${img});
        background-blend-mode: soft-light;
        box-shadow: 0 10px 30px 0 #00000040;

        div {
            height: 100%;
            border-radius: 5px;
            padding: 220px 24px 0;

            text-transform: uppercase;
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            color: white;

            border: 2px solid #BF9C2499;
        }
    }

    .button-sqr {
        margin: 0 auto;
        width: 187px;
        height: 53px;
    }

    @media (min-width: 768px) {
        padding-top: 80px;
        padding-bottom: 100px;

        .cards {
            padding: 30px 15px 0;
            display: grid;
            grid-template: repeat(2, 270px) / repeat(3, 1fr);
            grid-gap: 15px;
        }

        .card div {
            padding: 175px 14px 0;
        }

        .button-sqr {
            margin-top: 40px;
        }
    }

    @media (min-width: 992px) {
        .cards {
            padding: 30px 21px 0;
        }
    }

    @media (min-width: 1200px) {
        padding-top: 90px;
    }
    
    @media (min-width: 1400px) {
        .cards {
            padding: 50px 0 0;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 20px;
        }
    }
`;