import Layout from "../components/Layout";
import Head from "next/dist/next-server/lib/head";
import ItemTest from "../components/ItemTest";
import { useEffect, useContext, useState } from "react";
import {
  deleteTest,
  fetchPagedTests,
  PagedTests,
} from "../lib/services/firestore";
import { AuthContext } from "../components/authContext";
import { Test } from "../lib/resources/test";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import ButtonPrimary from "../components/Button";
import { createDynamicLinks } from "../lib/services/dynamicLinks";
import { ToastContext } from "../components/ToastContext";
import CreateTestDialog from "../components/CreateTestDialog";
import Questions from "../components/Questions";
import QrCodeDialog from "../components/QrCodeDialog";

export type TestMenuItem = {
  title: string;
  theme: "primary" | "accent" | "danger";
  action(test: Test): void;
};

export default function DashBoard() {
  const { currentUser } = useContext(AuthContext);
  const { message, setMessage } = useContext(ToastContext);

  const [tests, setTests] = useState<Test[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test>(undefined);
  const [cursor, setCursor] = useState<QueryDocumentSnapshot>();
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [isShowCreateTestDialog, setIsShowCreateTestDialog] = useState<boolean>(
    false
  );
  const [isShowQrCodeDialog, setIsShowQrCodeDialog] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const buildItemModels = () => {
    if (currentUser == null || currentUser == undefined) return;
    fetchPagedTests(currentUser.uid, cursor).then((result: PagedTests) => {
      setTests(tests.concat(result.tests));
      setCursor(result.cursor);
      if (cursor && cursor.id == result.cursor.id) {
        setIsLastPage(true);
      }
    });
  };

  const testMenuItems: TestMenuItem[] = [
    {
      title: "アプリで解答する",
      action: (test: Test) => {
        createDynamicLinks(test.documentId).then((link) => {
          setUrl(link)
          setIsShowQrCodeDialog(true)
        });
      },
      theme: "primary",
    },
    {
      title: "削除",
      action: (test: Test) => {
        if (!confirm(`「${test.name}」を削除しますか？`)) return;

        deleteTest(test.documentId).then((documentId) => {
          setSelectedTest(undefined);
          setTests(tests.filter((it) => it.documentId != documentId));
          setMessage("問題集を削除しました");
        });
      },
      theme: "danger",
    },
  ];

  useEffect(() => {
    buildItemModels();
  }, [currentUser]);

  return (
    <div>
      <Head>
        <title>暗記メーカー | ダッシュボード</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-7xl p-3">
          <div className="grid grid-cols-2 gap-4 divide-x mb-6">
            <div className="col-span-1">
              <div className="flex justify-items-center">
                <h3 className="text-3xl md:text-4xl font-bold  mr-auto ml-0 mt-5 mb-3">
                  問題集一覧
                </h3>
                <div className="flex-glow-1" />
                <div className="my-auto">
                  <ButtonPrimary
                    title={"+ 新規作成"}
                    onClick={() => {
                      setIsShowCreateTestDialog(true);
                    }}
                    theme={"accent"}
                  />
                </div>
              </div>
              {tests.map((test: Test) => (
                <div key={test.documentId}>
                  <ItemTest
                    test={test}
                    onClick={() => {
                      setSelectedTest(test);
                    }}
                  />
                </div>
              ))}
              <div className="w-full text-center mt-5">
                {tests.length > 0 && !isLastPage && (
                  <ButtonPrimary
                    title={"もっと見る"}
                    onClick={() => {
                      buildItemModels();
                    }}
                    theme={"primary"}
                  />
                )}
              </div>
            </div>
            <div className="col-span-1 pl-5">
              {selectedTest && (
                <div>
                  <div className="pb-5 border-b">
                    <h4 className="text-xl md:text-2xl font-bold  mr-auto ml-0 mt-5 mb-3">
                      {selectedTest.name}
                    </h4>
                    <p>{`作成日：　　${selectedTest.created_at.toLocaleDateString()}`}</p>
                    <p>{`公開設定：　${
                      selectedTest.public ? "全体公開" : "限定公開"
                    }`}</p>
                    <div className="flex gap-4">
                      {testMenuItems.map((it) => (
                        <div className="mt-4" key={it.title}>
                          <ButtonPrimary
                            title={it.title}
                            onClick={() => it.action(selectedTest)}
                            theme={it.theme}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5">
                    <Questions
                      documentId={selectedTest.documentId}
                      onClick={() => {}}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>

      <CreateTestDialog
        isShow={isShowCreateTestDialog}
        setIsShow={setIsShowCreateTestDialog}
        onCreateTest={(test) => {
          setMessage("問題集を追加しました");
          setTests([test].concat(tests));
        }}
      />
      <QrCodeDialog
        isShow={isShowQrCodeDialog}
        setIsShow={setIsShowQrCodeDialog}
        url={url}
      />
    </div>
  );
}
