import { createGlobalStyle } from "styled-components";

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

        font-family: 'Prelo', sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    a:hover{ /* @ts-ignore */
        color: ${({ theme }) => theme.colors.orange};
    }
`;

export default GlobalStyle;