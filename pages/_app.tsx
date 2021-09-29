import React from "react";

import type { AppProps } from "next/app";

import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles/globalStyle";
import "../styles/globals.css";
import "../styles/nprogress.css";

import { ThemeProvider } from "styled-components";

import { theme } from "../styles/themes/default";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", (url) => {
  console.log(`Loaded ${url}`);
  NProgress.done();
});
Router.events.on("routeChangeError", (url) => {
  console.log(`Error ${url}`);
  NProgress.done();
});

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
