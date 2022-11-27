import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Pro Handwerker"
        />
        <meta name="author" content="Pro Handwerker" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
