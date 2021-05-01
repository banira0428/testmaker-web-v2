import { useState, useContext, useEffect } from "react";
import { createQuestion } from "../lib/services/firestore";
import { AuthContext } from "../components/authContext";
import Button from "./Button";
import Transition from "react-transition-group/cjs/Transition";
import { Question } from "../lib/resources/question";

type Props = {
  isShow: boolean;
  setIsShow(isShow: boolean): void;
  documentId: string;
  order: number;
  onCreateQuestion(question: Question): void;
};

export default function CreateQuestionDialog(props: Props) {
  const { currentUser } = useContext(AuthContext);
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [order, setOrder] = useState<number>(props.order);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");

  useEffect(() =>{
    setOrder(props.order)
  },[props.order])

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
              "bg-opacity-40",
              "bg-primary",
              "p-3",
              "top-0",
              "left-0",
              `fade-${status}`,
            ].join(" ")}
            onClick={() => props.setIsShow(false)}
          >
            <div
              className="bg-white w-3/6 mx-auto mt-12 p-3 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold  mr-auto ml-0">
                問題の新規作成
              </h3>
              <textarea
                className="w-full mt-5 p-3 border"
                placeholder="問題文（必須）"
                autoFocus
                onChange={(e) => setQuestion(e.target.value)}
              />
              <textarea
                className="w-full mt-5 p-3 border"
                placeholder="解答（必須）"
                autoFocus
                onChange={(e) => setAnswer(e.target.value)}
              />
              <textarea
                className="w-full mt-5 p-3 border"
                placeholder="解説（任意）"
                autoFocus
                onChange={(e) => setExplanation(e.target.value)}
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
                  問題を続けて追加する（保存後もダイアログを表示したままにする）
                </label>
              </div>
              <div className="text-center mt-5">
                <Button
                  title={"追加して保存"}
                  onClick={() => {
                    createQuestion(
                      props.documentId,
                      question,
                      answer,
                      [],
                      [],
                      false,
                      false,
                      explanation,
                      order + 1,
                      0,
                      ""
                    );
                    setOrder(order+1)
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
