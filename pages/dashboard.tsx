import Layout from "../components/Layout";
import Head from "next/dist/next-server/lib/head";
import TestList from "../components/TestList";
import TestInformation from "../components/TestInformation";
import React, { useContext } from "react";
import { SelectedTestContext } from "../components/contexts/TestContext";
import { TestsProvider } from "../components/contexts/TestsContext";

export default function DashBoard() {
  const { selectedTest, _ } = useContext(SelectedTestContext);

  return (
    <div>
      <Head>
        <title>暗記メーカー | ダッシュボード</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-7xl p-3">
          <div className="grid grid-cols-3 gap-4 divide-x mb-6">
            <TestsProvider>
              <div className={`${selectedTest ? "col-span-1" : "col-span-3"}`}>
                <TestList />
              </div>
              <div
                className={`${selectedTest ? "col-span-2" : "col-span-0"} pl-5`}
              >
                <TestInformation />
              </div>
            </TestsProvider>
          </div>
        </div>
      </Layout>
    </div>
  );
}
