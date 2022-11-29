import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Pro Handwerker" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
