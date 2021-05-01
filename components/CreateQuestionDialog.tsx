import { useState, useEffect, useContext } from "react";
import { createQuestion } from "../lib/services/firestore";
import Button from "./Button";
import Transition from "react-transition-group/cjs/Transition";
import { Question } from "../lib/resources/question";
import { ToastContext } from "./ToastContext";

type Props = {
  isShow: boolean;
  setIsShow(isShow: boolean): void;
  documentId: string;
  order: number;
  onCreateQuestion(question: Question): void;
};

export default function CreateQuestionDialog(props: Props) {
  const { message, setMessage } = useContext(ToastContext);
  const [isContinuous, setIsContinuous] = useState<boolean>(true);
  const [order, setOrder] = useState<number>(props.order);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [validate, setValidate] = useState<boolean>(false);

  useEffect(() => {
    setOrder(props.order);
  }, [props.order]);

  const resetForm = () => {
    setQuestion("");
    setAnswer("");
    setExplanation("");
  };

  useEffect(() => {
    setValidate(question !== "" && answer !== "");
  }, [question, answer]);

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
                value={question}
                required
              />
              <textarea
                className="w-full mt-5 p-3 border"
                placeholder="解答（必須）"
                autoFocus
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                required
              />
              <textarea
                className="w-full mt-5 p-3 border"
                placeholder="解説（任意）"
                autoFocus
                onChange={(e) => setExplanation(e.target.value)}
                value={explanation}
              />
              <div className="mt-5">
                <input
                  type="checkbox"
                  id="isContinuous"
                  onChange={(e) => {
                    setIsContinuous(e.target.checked);
                  }}
                  checked={isContinuous}
                />
                <label htmlFor="isContinuous" className="ml-3">
                  問題を続けて追加する（保存後もダイアログを表示したままにする）
                </label>
              </div>
              <div className="text-center mt-5">
                <button
                  className={`${
                    !validate && "cursor-not-allowed"
                  } focus:outline-none bg-transparent hover:bg-accent text-accent font-semibold hover:text-white py-2 px-4 border border-accent hover:border-transparent rounded`}
                  onClick={() => {
                    if (!validate) {
                      return;
                    }
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
                    ).then((question) => {
                      setOrder(order + 1);
                      setMessage("問題を保存しました");
                      props.onCreateQuestion(question);
                      resetForm();
                      if (!isContinuous) {
                        props.setIsShow(false);
                      }
                    });
                  }}
                >
                  追加して保存
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Transition>
  );
}
