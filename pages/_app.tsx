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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../public/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../public/images/favicon-16x16.png"
        />
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

// Estrutura
// Conveniência
// Comodidade "16.013,31m² de área dedicada ao caminhão"
// Espaço de Lazer
// Segurança
// Estacionamento "42 vagas"
// Banheiros "Esquipados com locker e chuveiros"
