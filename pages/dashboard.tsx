import Layout from "../components/Layout";
import Head from "next/dist/next-server/lib/head";
import { Test } from "../lib/resources/test";
import TestList from "../components/TextList";
import { SelectedTestProvider } from "../components/contexts/TestContext";
import TestInformation from "../components/TestInformation";

export type TestMenuItem = {
  title: string;
  theme: "primary" | "accent" | "danger";
  action(test: Test): void;
};

export default function DashBoard() {
  return (
    <div>
      <Head>
        <title>暗記メーカー | ダッシュボード</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-7xl p-3">
          <div className="grid grid-cols-2 gap-4 divide-x mb-6">
            <SelectedTestProvider>
              <div className="col-span-1">
                <TestList />
              </div>
              <div className="col-span-1 pl-5">
                <TestInformation />
              </div>
            </SelectedTestProvider>
          </div>
        </div>
      </Layout>
    </div>
  );
}
