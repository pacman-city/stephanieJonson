import styled from 'styled-components';
import arrowRight from '../../../../assets/images/svg/arrow-right.svg';
import arrowLeft from '../../../../assets/images/svg/arrow-left.svg';


export const BlogContainer = styled.div`
    .swiper {
        padding: 35px 10px 65px;
    }

    .card{
        box-shadow: 0 4px 20px 0 #00000026;
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .card-title {
        padding: 20px;
        
        span {
            font-size: 18px;
            line-height: 1.5;
            font-weight: 500;
            color: #BF9C24;
        }
        
        p {
            margin-top: 11px;
            font-size: 20px;
            line-height: 1.2;
            font-weight: 500;
        }
    }

    .swiper-button-prev::after {
        content: url(${arrowLeft});
    }

    .swiper-button-next::after {
        content: url(${arrowRight});
    }

    @media screen and (max-width: 768px) {
        .swiper {
            padding: 55px 10px 80px;
        }
    }

    @media screen and (min-width: 992px) {
        .cards {
            padding: 45px 21px 100px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 35px;
        }
    }

    @media screen and (min-width: 1200px) {
        .cards {
            padding: 45px 180px 100px 226px;
        }
    }

    @media screen and (min-width: 1200px) {
        max-width: 1550px;
        margin: 0 auto;

        .cards {
            padding: 45px 226px 100px;
        }
    }
`;