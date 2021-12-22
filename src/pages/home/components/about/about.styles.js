import styled from 'styled-components';
import img from '../../../../assets/images/image2.jpg';
import svgMask from '../../../../assets/images/svg/about-mask.svg';
import img1 from '../../../../assets/images/image1.jpg';


export const AboutContainer = styled.div`
    padding: 80px 0;

    .image {
        margin-top: 30px;
        height: 500px;
        display: grid;
    }

    .image-backdrop {
        grid-area: 1 / 1 / -1 / -1;
        margin: 25px 8px 25px 52px;
        background: no-repeat right 50% bottom/cover url(${img});

        div {
            height: 100%;
            background: #0000007F no-repeat right 50px center/auto calc(100% - 50px) url(${svgMask});
            mix-blend-mode: hard-light;
        }
    }

    .image-frame {
        margin-right: 30px;
        grid-area: 1 / 1 / -1 / -1;

        border: 7px solid white;

        isolation: isolate;

        display: flex;
        align-items: center;

        div {
            margin-left: 15px;
            width: 40%;
            height: 40vw;
            background: no-repeat center/cover url(${img1});
            box-shadow: -5px 10px 35px 15px #00000033;
        }
    }

    p {
        margin-top: 40px;
        font-size: 14px;
        line-height: 1.5;
        color: #171717;
    }

    .button-sqr {
        margin: 30px auto 0;
        width: 187px;
    }

    @media (min-width: 768px) {
        .container{
            padding-right: 140px;
            display: grid;
            grid-template: 1fr auto 1fr / 292px 1fr;
            grid-column-gap: 15px;
        }

        .image {
            grid-area: 1 / 1 / -1 / 2;
            margin: 0;
        }

        .image-backdrop {
            margin-right: 0;
        }

        .image-frame div {
            width: 140px;
            height: 160px;
        }

        h2 {
            align-self: end;
            text-align: left;
        }

        .button-sqr {
            margin: 35px 0 0;
        }
    }

    @media (min-width: 1200px) {
        padding: 100px 0 85px 0;

        .container{
            padding-right: 226px;
            grid-column-gap: 30px;
        }
    }
    
    @media (min-width: 1400px) {
        .container{
            max-width: 1750px;
            grid-template: 1fr auto 1fr / 490px 1fr;
        }

        .image-backdrop {
            margin: 25px 0 25px 170px;
        }
    
        .image-frame div {
            width: 210px;
            height: 250px;
        }

        p {
            margin-left: 50px;
            margin-right: 25px;
        }
        
        .button-sqr {
            margin: 35px 0 0 50px;
        }
    }
`;