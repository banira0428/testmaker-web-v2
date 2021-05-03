import { useContext, useState } from "react";
import { createDynamicLinks } from "../lib/services/dynamicLinks";
import Button from "./Button";
import { SelectedTestContext } from "./contexts/TestContext";
import Questions from "./Questions";
import QrCodeDialog from "../components/QrCodeDialog";

export default function TestInformation() {
  const { selectedTest, _ } = useContext(SelectedTestContext);

  const [isShowQrCodeDialog, setIsShowQrCodeDialog] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

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
            <Button
              title={"問題集のダウンロード"}
              onClick={() =>
                createDynamicLinks(selectedTest.documentId).then((link) => {
                  setUrl(link);
                  setIsShowQrCodeDialog(true);
                })
              }
              className="mt-5"
              theme={"primary"}
            />
            <QrCodeDialog
              isShow={isShowQrCodeDialog}
              setIsShow={setIsShowQrCodeDialog}
              url={url}
            />
          </div>
          <div className="mt-5">
            <Questions
              documentId={selectedTest.documentId}
            />
          </div>
        </div>
      )}
    </div>
  );
}
