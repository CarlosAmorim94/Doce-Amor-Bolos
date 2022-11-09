import Document, { Head, Html, Main, NextScript } from "next/document";
import { ReactElement } from "react";

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <meta name="Doce Amor - Bolos" content="em desenvolvimento" />
          <link rel="icon" href="/img/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}