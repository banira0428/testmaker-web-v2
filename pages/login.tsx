import Layout from "../components/Layout";
import Head from "next/dist/next-server/lib/head";
import LoginForm from "../components/LoginForm";

export default function Login() {

  return (
    <div>
      <Head>
        <title>暗記メーカー | ログイン</title>
      </Head>
      <Layout>
        <LoginForm/>
      </Layout>
    </div>
  );
}
