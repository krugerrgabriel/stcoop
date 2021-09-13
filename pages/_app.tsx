import type { AppProps } from "next/app";

import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles/globalStyle";
import "../styles/globals.css";

import { ThemeProvider } from "styled-components";

import { theme } from "../styles/themes/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fd5000" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
