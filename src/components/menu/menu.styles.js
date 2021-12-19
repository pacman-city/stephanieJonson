import styled from 'styled-components';


export const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    max-height: 1368px;
    width: 100%;

    .menu-container {
        height: 100%;
        width: 100%;
        padding: 25px 10px;

        backdrop-filter: blur(8px);
        background-color: #292C2799;
        overflow-y: auto;
    }

    .menu-row {
        display: flex;
        justify-content: space-between;
    }

    .close-btn {
         color: white;

         &:hover {
             color: #BF9C24;
             transition: color 0.1s;
         }
    }

    a {
        padding: 7px 20px;
        margin-bottom: 3px;
        color: white;
        font-size: 18px;
        font-weight: 400;

        &:hover {
            color: #BF9C24;
        }
    }
    
    .submenu{
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: color 0.1s;
    }

    .socials{
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            margin-top: 10px;
            display: flex;
        }
    }

    @media screen and (min-width: 768px) {
        padding-right: 125px;

        .menu-container{
            padding: 25px 15px;
            display: flex;
            flex-direction: column;
        }

        .close-btn svg {
            height: 45px;
        }

        a {
            padding-left: 0;
        }

        .submenu {
            flex-grow: 1;
            margin-top: 90px;
            align-items: flex-start;
        }
        
        .socials{
            margin-top: 0;
            align-items: flex-start;
    
            div a:not(:first-of-type){
                padding-left: 25px;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        height: 100%;
        background-color: unset;
        backdrop-filter: unset;

        .menu-container {
            width: 205px;
            padding: 20px 0 25px 30px;
            
            background-color: unset;
            overflow: visible;
            pointer-events: all;

            &::before {
                content: '';
                display: block;
                height: 100%;
                width: 200%;
                position: absolute;
                top: 0;
                right: 0;
                width: 1500%;
                z-index: -1;

                background-color: #292C2766;
                backdrop-filter: blur(3px);
            }
        }

        .submenu{
            margin-top: 125px;

            a {
                padding-right: 0;
            }
        }

        .socials{
            div a:not(:first-of-type){
                padding-left: 0;
                padding-right: 15px;
            }

            svg{
                height: 25px;
            }
        }
    }
`;