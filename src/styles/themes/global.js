import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Abel&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Muli:400,600&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    html,
    body,
    #root {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mainContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1366px;
        width: 100%;
    }

    body{
        background-color: ${props=> props.theme.colors.background};
        font-family: Muli, sans-serif;
    }

    section {
        width: 100%;
    }

    ::selection {
        color: #282828;
        background-color: #FFA95C;
    }

    .container {
        width: 100%;
        max-width: 1144px;
        padding: 0 17px;
        align-self: center;
        margin-left: auto;
        margin-right: auto;
    }

    h2 {
        font-family: Abel, sans-serif;
        font-size: 30px;
        line-height: 38px;
        text-align: justify;
        color: #D96921;
        font-weight: normal;
        margin: 25px 0 12px 0;

        @media screen and (max-width: 520px) {
            font-size: 28px;
            line-height: 36px;
        }

        &.justifyRight {
            text-align: right;

            @media screen and (max-width: 1024px) {
            text-align: left;
            }
        }
    }

    p {
        font-size: 16px;
        line-height: 20px;
        text-align: justify;
        margin-bottom: 15px;

        @media screen and (max-width: 520px) {
            font-size: 14px;
            line-height: 18px;
        }
    }

    .header {
        position: relative;
        min-height: 240px;
        margin-bottom: 35px;
        width: 100vw;

        @media screen and (max-width: 520px) {
            margin-bottom: 10px;
        }

        .logoContainer {
            background: linear-gradient(178.31deg, #000000 3.33%, rgba(0, 0, 0, 0) 77.63%);
            width: 100%;
            min-height: 130px;
            height: 20vw;
            max-height: 222px;
            position: absolute;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            .logoName {
                height: 90%;
                width: 40%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                margin-top: 20px;
                max-width: 425px;
                margin-right: 20px;

                @media screen and (max-width: 768px) {
                    margin-top: 0;
                    height: 80%;
                    margin-bottom: 15px;
                }
            }

            .logo {
                height: 75%;
                width: 15%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                margin-top: 30px;
                max-width: 88px;

                @media screen and (max-width: 768px) {
                    margin-top: 0;
                }
            }
        }

        .headerBackground {
            width: 100%;
            min-height: 240px;
            height: 40vw;
            max-height: 630px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }

    .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        background-color: ${props=> props.theme.colors.background};
        overflow-y: scroll;
        transition: 150ms ease-in-out;
        animation: show 250ms;
        z-index: 2;

        @keyframes show {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        .modalHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 17px;

            h2 {
                text-transform: uppercase;
            }
        }

        .closeButton {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 75px;
            height: 75px;

            .line {
                display: block;
                width: 45px;
                height: 1px;
                background-color: #D96921;
                position: absolute;

                &:nth-child(1) {
                    transform: rotate(45deg);
                }

                &:nth-child(2) {
                    transform: rotate(-45deg);
                }
            }
        }

        p {
            margin: 10px 17px;

            &:last-of-type {
                margin-bottom: 50px;
            }
        }
    }

    .floatRight {
        display: flex;
        float: right;
        margin: 16px 0 30px 150px;
        position: relative;

        @media screen and (max-width: 1024px) {
            float: none;
            justify-content: flex-end;
            align-self: flex-end;

            img {
                width: 80%;
            }
        }

        @media screen and (max-width: 768px) {

            img {
                width: 100%;
            }
        }

        &::after {
            content: "“De herança, tínhamos duas coisas: a nossa amizade e o aprendizado de tantos anos no comando do restaurante. Somos o antiquário vivo do Antiquárius”.";
            display: flex;
            justify-content: center;
            align-items: center;
            width: 280px;
            height: 250px;
            background-color: #D96921;
            box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
            z-index: 1;
            font-family: Muli;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 25px;
            text-align: center;
            color: #F9F9F9;
            padding: 50px;
            position: absolute;
            top: 40%;
            left: -7vw;

            @media screen and (max-width: 1024px) {
                width: 50%;
                left: -150px;
                top: 45%;
            }

            @media screen and (max-width: 768px) {
                width: 80%;
                left: -150px;
                top: 45%;
            }

            @media screen and (max-width: 480px) {
                font-size: 16px;
                line-height: 23px;
                padding: 25px;
            }
        }
    }

    .compensation {
        margin-bottom: 280px;

        @media screen and (max-width: 1024px) {
            margin-bottom: 0;
        }
    }

    .negativeCompensation {

        @media screen and (max-width: 1366px) {
            margin-top: -50px;
        }
        
        @media screen and (max-width: 1200px) {
            margin-top: -75px;
        }

        @media screen and (max-width: 1100px) {
            margin-top: -90px;
        }

        @media screen and (max-width: 1100px) {
            margin-top: 0;
        }
    }

    /* .hideMobile {

        @media screen and (max-width: 1024px) {
            display: none;
        }
    } */

    .floatLeft {
        margin: -250px 100px 0 0;
        align-self: flex-start;

        @media screen and (max-width: 1024px) {
            display: none;
        }
    }

    .left {
        position: relative;
        float: left;    
        align-self: flex-start;
        width: fit-content;
    }

    .clearFloat {
        clear: right;
        /* border: 1px solid red; */
    }

    .goalText {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 50px 0;

        p {
            width: 100%;
            max-width: 680px;
            font-family: Abel, sans-serif;
            font-weight: normal;
            font-size: 28px;
            line-height: 36px;
            text-align: center;
            color: #D96921;
        }

        /* @media screen and (max-width: 768px) {
            display: none;
        } */
    }

    .hideMobile {
        
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .moreButton {
        display: none;

        @media screen and (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 128px;
            height: 36px;
            border: 1px solid #FFA95C;
            border-radius: 5px;
            text-transform: uppercase;
            font-family: Muli;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            color: #D96921;
            margin: 17px 0;
        }
    }

    .promotionalCard {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #F9F9F9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        height: 140px;
        max-width: 1144px;
        width: 100%;
        margin: 18px auto;
        padding: 0 7%;

        @media screen and (max-width: 520px) {
            padding: 0 17px;
        }

        span {
            font-weight: bold;
            font-size: 31px;
            line-height: 39px;
            color: "#282828";
            display: block;
            max-width: 464px;
            margin-right: 50px;

            @media screen and (max-width: 768px) {
                font-size: 24px;
                line-height: 32px;
                margin-right: 20px;
            }

            @media screen and (max-width: 520px) {
                font-size: 18px;
                line-height: 25px;
                margin-right: 15px;
                font-weight: normal;
                max-width: 200px;
            }
        }

        a {
            text-decoration: none;
            color: #FFF;
            background: #FF6500;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 210px;
            height: 48px;
            transition: 150ms ease-in-out;

            &:hover {
                background-color: #D96921;
            }

            @media screen and (max-width: 520px) {
                min-width: 160px;
            }

            @media screen and (max-width: 400px) {
                min-width: 125px;
                width: 125px;
            }
        }
    }
`
