import Layout from "../components/Layout";
import Head from "next/dist/next-server/lib/head";
import Heading from "../components/Heading";

export default function DashBoard() {

  return (
    <div>
      <Head>
        <title>暗記メーカー | ダッシュボード</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-5xl p-3">
          <Heading title={"Dashboard"} subTitle={"ダッシュボード"} />
        </div>
      </Layout>
    </div>
  );
}
