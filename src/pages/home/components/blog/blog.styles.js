import styled from 'styled-components';
import {swiperNav} from '../../../../global.styles';


export const BlogContainer = styled.div`
    .swiper {
        padding: 35px 10px 65px;
    }

    .card{
        box-shadow: 2px 4px 25px 1px #00000026;
    }

    img {
        width: 100%;
        height: 70vw;
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

    ${swiperNav}

    @media screen and (min-width: 576px) {
        img {
            height: 40vw;
        }
    }
    
    @media screen and (max-width: 767.98px) {
        .swiper {
            padding: 55px 10px 80px;
        }
    }
    
    @media screen and (min-width: 768px) {
        img {
            height: 23vw;
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

        img {
            height: min(14vw, 255px);
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