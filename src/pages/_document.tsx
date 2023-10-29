import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-m-plus font-[500]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
