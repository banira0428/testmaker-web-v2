import Layout from "../components/Layout";
import Head from "next/dist/next-server/lib/head";
import Heading from "../components/Heading";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export default function Login() {
  const uiConfig = {
    signInFlow: "redirect",
    signInSuccessUrl: "/dashboard",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div>
      <Head>
        <title>暗記メーカー | ログイン</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-xl p-3">
          <Heading title={"Login"} subTitle={"ログイン"} />
          <p className="mb-6">
            ブラウザ上でも問題集を管理したい場合は、ログインをお願いします。
          </p>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </Layout>
    </div>
  );
}
