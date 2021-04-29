import "./styles.css";
import Head from "next/head";
import { useEffect, useReducer } from "react";
import { authStateChanged } from "../lib/firebase_auth";
import authReducer from "../lib/authReducer";

export default function _app({Component, pageProps}) {

  const [state, dispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  )

  useEffect(() => {
    return authStateChanged(dispatch);
  },[])

  return (
    <>
      <Head>
          <title>暗記メーカー</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}