import "./styles.css";
import Head from "next/head";
import { AuthProvider } from "../components/authContext";

export default function _app({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>暗記メーカー</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
