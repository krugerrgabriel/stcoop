import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles/globalStyle";

import { ThemeProvider } from "styled-components";

import { theme } from "../styles/themes/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
