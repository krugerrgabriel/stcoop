import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles/globalStyle";
import "../styles/globals.css";

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

// Estrutura
// Conveniência
// Comodidade "16.013,31m² de área dedicada ao caminhão"
// Espaço de Lazer
// Segurança
// Estacionamento "42 vagas"
// Banheiros "Esquipados com locker e chuveiros"
