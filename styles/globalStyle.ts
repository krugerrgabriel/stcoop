import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    *, html{
        outline: none;
    }
    body{
        padding: 0;
        margin: 0;

        border: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;