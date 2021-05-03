import React, { useContext, useState } from "react";
import { Test } from "../lib/resources/test";
import { createDynamicLinks } from "../lib/services/dynamicLinks";
import { TestMenuItem } from "../pages/dashboard";
import Button from "./Button";
import { SelectedTestContext } from "./contexts/TestContext";
import Questions from "./Questions";
import QrCodeDialog from "../components/QrCodeDialog";

export default function TestInformation() {
  const { selectedTest, _ } = useContext(SelectedTestContext);

  const [isShowQrCodeDialog, setIsShowQrCodeDialog] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const testMenuItems: TestMenuItem[] = [
    {
      title: "アプリで解答する",
      action: (test: Test) => {
        createDynamicLinks(test.documentId).then((link) => {
          setUrl(link);
          setIsShowQrCodeDialog(true);
        });
      },
      theme: "primary",
    },
  ];

  return (
    <div>
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
                  <Button
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
      <QrCodeDialog
        isShow={isShowQrCodeDialog}
        setIsShow={setIsShowQrCodeDialog}
        url={url}
      />
    </div>
  );
}
