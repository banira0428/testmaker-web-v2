import Layout from "../components/Layout";
import Head from "next/dist/next-server/lib/head";
import Heading from "../components/Heading";
import ItemTest from "../components/ItemTest";
import { useEffect, useContext, useState } from "react";
import { fetchTests } from "../lib/services/firestore";
import { AuthContext } from "../components/authContext";
import { Test } from "../lib/resources/test";

export default function DashBoard() {
  const { currentUser } = useContext(AuthContext);

  const [tests, setTests] = useState([]);

  useEffect(() => {
    if (currentUser == null || currentUser == undefined) return;
    fetchTests(currentUser.uid).then((results) => setTests(results));
  }, [currentUser]);

  return (
    <div>
      <Head>
        <title>暗記メーカー | ダッシュボード</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-5xl p-3">
          <Heading title={"Dashboard"} subTitle={"ダッシュボード"} />
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h3 className="text-3xl md:text-4xl font-bold  mr-auto ml-0 mt-5 mb-3">
                問題集
              </h3>
              {tests.map((test: Test) => (
                <div key={test.documentId}>
                  <ItemTest test={test} />
                </div>
              ))}
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
