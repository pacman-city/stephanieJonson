import styled from 'styled-components';
import svgMask from '../../assets/images/svg/sidebar-mask.svg';
import svgMaskShadow from '../../assets/images/svg/sidebar-mask-shadow.svg';


export const BarRightContainer = styled.div`
    grid-area: 1 / 3 / -1 / -1;
    background-color: red;
    height: 100%;
    width: 160px;
    z-index: 2;
    background: repeat-y top 170px right -5px/100% auto url(${svgMask});

    background: #292C274C repeat-y top 170px right -5px/100% auto url(${svgMaskShadow});///////////////
    backdrop-filter: blur(1px);///////////////

    @media screen and (min-width: 1400px) {
        width: 205px;
        background-position: top 200px right -5px;
    }
`;