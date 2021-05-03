import "./styles.css";
import Head from "next/head";
import { AuthProvider } from "../components/authContext";
import { ToastProvider } from "../components/contexts/ToastContext";
import { SelectedTestProvider } from "../components/contexts/TestContext";

export default function _app({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>暗記メーカー</title>
      </Head>
      <AuthProvider>
        <ToastProvider>
          <SelectedTestProvider>
            <Component {...pageProps} />
          </SelectedTestProvider>
        </ToastProvider>
      </AuthProvider>
    </>
  );
}
