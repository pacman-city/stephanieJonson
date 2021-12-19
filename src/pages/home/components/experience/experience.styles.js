import styled from 'styled-components';
import img from '../../../../assets/images/image2.jpg';
import svgLine from '../../../../assets/images/svg/line-vertical-white.svg';
import img1 from '../../../../assets/images/image4.png';


export const ExperienceContainer = styled.div`
    padding-top: 70px;
    padding-bottom: 70px;
    background: no-repeat center/cover linear-gradient(#2F3438FA, #2F3438FA), url(${img});

    h2 {
        margin-bottom: 30px;
        color: white;
    }

    .content {
        display: grid;
        grid-row-gap: 20px;
        grid-auto-flow: column;
        grid-template: repeat(3, auto) auto repeat(3, auto) / 200px;
        justify-content: center;

        div {
            color: white;
            font-size: 18px;
            padding-left: 15px;
            background: no-repeat left top 11px / auto 60px url(${svgLine});

            span {
                display: block;
                margin-bottom: 3px;
                font-size: 40px;
                font-weight: 700;
                color: #BF9C24;
            }
        }

        div.logo {
            justify-self: center;
            width: 160px;
            height: 176px;
            background: no-repeat center/cover url(${img1});
        }
    }

    @media (min-width: 768px) {
        position: relative;
        z-index: 1;

        h2 {
            margin-bottom: 50px;
        }

        .content {
            grid-template: repeat(3, auto) / 1fr 1fr;
            row-gap: 40px;
            background: no-repeat center/200px 220px url(${img1});

            div {
                background-size: auto 70px;

                span {
                    font-size: 50px;
                }

                &:first-of-type,
                &:nth-of-type(3) {
                    margin-left: 80px;
                }

                &:nth-of-type(5),
                &:last-of-type {
                    margin-right: 80px;
                }
            }
        }

        div.logo {
            display: none;
        }

       .content .col {
            text-align: right;
            padding-right: 15px;
            background: no-repeat right top 11px / auto url(${svgLine});
        }
    }

    @media (min-width: 992px) {
        padding-top: 100px;
        padding-bottom: 100px;
        
        h2 {
            margin-bottom: 90px;
        }
        
        .content {
            background: no-repeat center/284px 307px url(${img1});
        }
    }

    @media (min-width: 1200px) {
        position: static;
    }
`;