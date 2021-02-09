import "./styles.css";
import Head from "next/head";

export default function _app({Component, pageProps}) {
  return (
    <>
      <Head>
          <title>暗記メーカー</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}