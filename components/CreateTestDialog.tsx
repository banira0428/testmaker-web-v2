import { useState, useContext } from "react";
import { Test } from "../lib/resources/test";
import { createTest } from "../lib/services/firestore";
import { AuthContext } from "../components/authContext";
import Button from "./Button";
import Transition from "react-transition-group/cjs/Transition";

type Props = {
  isShow: boolean;
  setIsShow(isShow: boolean): void;
  onCreateTest(test: Test): void;
};

export default function CreateTestDialog(props: Props) {
  const { currentUser } = useContext(AuthContext);
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("");

  return (
    <Transition in={props.isShow} timeout={300}>
      {(status) => {
        return (
          <div
            className={[
              "z-50",
              "w-full",
              "h-full",
              "fixed",
              "bg-opacity-30",
              "bg-primary",
              "p-3",
              "top-0",
              `fade-${status}`,
            ].join(" ")}
            onClick={() => props.setIsShow(false)}
          >
            <div
              className="bg-white w-2/6 mx-auto mt-12 p-3 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold  mr-auto ml-0">
                新規作成
              </h3>
              <input
                type="text"
                className="w-full mt-5 p-3 border"
                placeholder="問題集のタイトル"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="mt-5">
                <input
                  type="checkbox"
                  id="isPrivate"
                  onChange={(e) => {
                    setIsPublic(!e.target.checked);
                  }}
                />
                <label htmlFor="isPrivate" className="ml-3">
                  限定公開（リンクを知っている人のみ利用可能）
                </label>
              </div>
              <div className="text-center mt-5">
                <Button
                  title={"追加して保存"}
                  onClick={() => {
                    createTest(title, isPublic, currentUser).then((test) => {
                      props.onCreateTest(test);
                      props.setIsShow(false);
                    });
                  }}
                  theme={"accent"}
                />
              </div>
            </div>
          </div>
        );
      }}
    </Transition>
  );
}