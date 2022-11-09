import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../services/prismic";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <PrismicProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </PrismicProvider>
    </ThemeProvider>
  );
}
