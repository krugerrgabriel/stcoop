import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    *, html{
        outline: none;

        overflow-x: hidden;
    }
    html{
        *{
            overflow: hidden;
        }
    }
    body{
        padding: 0;
        margin: 0;

        border: 0;

        font-family: 'Prelo', sans-serif !important;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    a:hover{
        color: #fd5000 !important;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        transition: 0.2s;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
        transition: 0.2s;
    }
    ::-webkit-scrollbar-thumb {
        background: #fd5000;
        border: 0px none #ffffff;
        border-radius: 0px;
        transition: 0.2s;
    }
    ::-webkit-scrollbar-track {
        background: #ffffff;
        border: 0px none #ffffff;
        border-radius: 0px;
        transition: 0.2s;
    }
    ::-webkit-scrollbar-track:hover {
        background: #f0f0f0;
    }
    ::-webkit-scrollbar-track:active {
        background: #ededed;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    ::selection {
        color: #ffffff;
        background: #000000;
    }
`;

export const DefaultText = css`
    font-size: 18px;
    font-weight: 400;

    line-height: 32px;

    @media(max-width: 1400px) {
        font-size: 16px;

        line-height: 28px;
    }
    @media(max-width: 1200px) {
        font-size: 14px;

        line-height: 26px;
    }
`;

export const DefaultMiniTitle = css`
    font-size: 28px;
    font-weight: 600;

    line-height: 48px;

    text-transform: uppercase;

    @media(max-width: 1400px) {
        font-size: 26px;

        line-height: 26px;
    }

    @media(max-width: 992px) {
        font-size: 24px;

        line-height: 24px;
    }
`;

export default GlobalStyle;