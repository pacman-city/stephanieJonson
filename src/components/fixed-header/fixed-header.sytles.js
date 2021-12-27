import styled from 'styled-components';


export const FixedHeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 5;
    
    background-color: #292C27DF;
    backdrop-filter: blur(8px);
    padding: 25px 30px;
    
    opacity: 0;
    transform: translateY(-25px);
    animation: header 0.6s ease-out forwards;

    @keyframes header {
        60%{
            opacity: 0.8;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    div {
        max-width: 1020px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    a {
        // padding: 10px 20px;
        margin-bottom: 3px;
        color: white;
        font-size: 18px;
        font-weight: 400;

        &:hover {
            color: #BF9C24;
        }
    }
`;