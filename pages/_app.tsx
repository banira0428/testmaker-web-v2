import "./styles.css";
import Head from "next/head";
import { AuthProvider } from "../components/authContext";
import { ToastProvider } from "../components/contexts/ToastContext";

export default function _app({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>暗記メーカー</title>
      </Head>
      <AuthProvider>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </AuthProvider>
    </>
  );
}
