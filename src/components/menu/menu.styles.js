import styled from 'styled-components';


export const MenuContainer = styled.div`
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;

    .wrapper {
        padding: 20px 10px 60px;
        height: 100%;
        display: flex;
        flex-direction: column;
        
        backdrop-filter: blur(8px);
        background-color: #292C27BF;
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
        }
    }

    .submenu{
        flex-grow: 1;
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        padding: 10px 20px;
        margin-bottom: 3px;
        color: white;
        font-size: 18px;
        font-weight: 400;

        &:hover {
            color: #BF9C24;
        }
    }

    .socials{
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            margin-top: 10px;
            display: flex;
        }
    }

    @media screen and (min-width: 768px) {
        display: flex;

        .wrapper{
            flex-grow: 1;
            padding: 25px 20px 20px 15px;
        }

        a {
            padding-left: 0;
        }

        .submenu {
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

        .overlay {
            width: 125px;
        }
    }

    @media screen and (min-width: 1200px) {
        height: 744px;
        width: 205px;
        z-index: 1;

        .wrapper {
            padding: 20px 0 25px 30px;
        }

        .submenu{
            margin-top: 90px;

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