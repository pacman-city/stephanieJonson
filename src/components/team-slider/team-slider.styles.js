import styled from 'styled-components';
import { paginationStyles } from '../../global.styles';


export const TeamSliderContainer = styled.div`
    .swiper {
        padding-top: 40px;
        padding-bottom: 70px;
    }

    .swiper-wrapper {
        height: inherit;
    }

    .swiper-slide {
        height: inherit;
    }

    ${paginationStyles}

    .swiper-pagination{
        bottom: 6px;
    }

    .swiper-button-prev,
    .swiper-button-next {
        bottom: 0;
    }
`;