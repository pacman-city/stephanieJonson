import styled from 'styled-components';
import svgBackdrop from '../../assets/images/svg/avatar-backdrop.svg';


export const AvatarContainer = styled.div`
    margin: 0 auto;
    ${({size}) => size === 'xl' ? 'width: 350px; height: 350px;' : size === 'lg' ? 'width: 220px; height: 220px;' : 'width: 180px; height: 180px;' }

    background: no-repeat center/cover url(${svgBackdrop});
    filter: drop-shadow(2px 5px 20px #00000040);
    
    img {
        width: 100%;
        height: 100%;
        padding: ${({size}) => size === 'xl' ? '25px' : '15px'};
        border-radius: 50%;
        object-fit: cover;
    }
`;