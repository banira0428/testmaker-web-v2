import QRCode from "qrcode.react";
import { useContext } from "react";
import Transition from "react-transition-group/cjs/Transition";
import Button from "./Button";
import { ToastContext } from "./ToastContext";

type Props = {
  isShow: boolean;
  setIsShow(isShow: boolean): void;
  url: string;
};

export default function QrCodeDialog(props: Props) {
  const { _, setMessage } = useContext(ToastContext);

  return (
    <Transition in={props.isShow} timeout={300}>
      {(status) => (
        <div
          className={`z-10 w-full h-full fixed bg-gray-700 p-3 top-0 left-0 fade-${status}`}
          onClick={() => props.setIsShow(false)}
        >
          <div
            className="bg-white w-3/6 mx-auto mt-12 mb-12 p-3 rounded-md"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold mr-auto ml-0 sticky">
              問題集のダウンロード
            </h3>
            <div className="text-center w-full mt-5">
              <QRCode
                value={props.url}
                size={320}
                renderAs={"svg"}
                className="mx-auto"
              />
              <Button
                title="URLをクリップボードにコピー"
                theme="primary"
                onClick={() => {
                  navigator.clipboard.writeText(props.url);
                  setMessage("URLをクリップボードにコピーしました");
                }}
                className="mt-5"
              />
              <p className="my-5 text-xl">手元のスマートフォンから、上記のQRコードを読み取ってください</p>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
