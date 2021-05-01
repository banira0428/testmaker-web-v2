import { useState, useEffect, useContext } from "react";
import { createQuestion } from "../lib/services/firestore";
import Transition from "react-transition-group/cjs/Transition";
import { Question } from "../lib/resources/question";
import { ToastContext } from "./ToastContext";
import { QuestionType, QUESTION_TYPES } from "../lib/question_type";

type Props = {
  isShow: boolean;
  setIsShow(isShow: boolean): void;
  documentId: string;
  order: number;
  onCreateQuestion(question: Question): void;
};

export default function CreateQuestionDialog(props: Props) {
  const ANSWERS_MAX = 6;
  const OTHERS_MAX = 6;

  const { _, setMessage } = useContext(ToastContext);
  const [isContinuous, setIsContinuous] = useState<boolean>(true);
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [isCheckOrder, setIsCheckOrder] = useState<boolean>(false);

  const [order, setOrder] = useState<number>(props.order);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>(Array(ANSWERS_MAX).fill(""));
  const [sizeOfAnswers, setSizeOfAnswers] = useState<number>(2);
  const [others, setOthers] = useState<string[]>(Array(OTHERS_MAX).fill(""));
  const [sizeOfOthers, setSizeOfOthers] = useState<number>(2);
  const [explanation, setExplanation] = useState<string>("");
  const [imageRef, setImageRef] = useState<string>("");
  const [validate, setValidate] = useState<boolean>(false);
  const [type, setType] = useState<QuestionType>(QUESTION_TYPES.WRITE);

  useEffect(() => {
    setOrder(props.order);
  }, [props.order]);

  const resetForm = () => {
    setQuestion("");
    setAnswer("");
    setAnswers(Array(ANSWERS_MAX).fill(""));
    setOthers(Array(OTHERS_MAX).fill(""));
    setExplanation("");
  };

  useEffect(() => {
    setValidate(
      type.validate({
        question: question,
        answer: answer,
        answers: answers,
        sizeOfAnswers: sizeOfAnswers,
        others: others,
        sizeOfOthers: sizeOfOthers,
        auto: isAuto,
      })
    );
  }, [question, answer, answers, sizeOfAnswers, sizeOfOthers, type]);

  return (
    <Transition in={props.isShow} timeout={300}>
      {(status) => {
        return (
          <div
            className={[
              "z-10",
              "w-full",
              "h-full",
              "fixed",
              "bg-gray-700",
              "p-3",
              "top-0",
              "left-0",
              `fade-${status}`,
            ].join(" ")}
            onClick={() => props.setIsShow(false)}
          >
            <div
              className="bg-white w-3/6 h-5/6 mx-auto mt-12 mb-12 p-3 rounded-md overflow-y-scroll"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold  mr-auto ml-0">
                問題の新規作成
              </h3>

              <div className="flex gap-4">
                {Object.values<QuestionType>(QUESTION_TYPES).map((it, i) => (
                  <div
                    key={i}
                    className={`flex-1 mt-3 text-center border-2 ${
                      type.name === it.name && "border-primary"
                    } rounded`}
                  >
                    <input
                      type="radio"
                      id={`type-${i}`}
                      name="type"
                      className="hidden"
                      onChange={() => {
                        setType(it);
                      }}
                    />
                    <label
                      htmlFor={`type-${i}`}
                      className="cursor-pointer block p-2 font-semibold"
                    >
                      {it.name}
                    </label>
                  </div>
                ))}
              </div>

              <textarea
                className="w-full mt-5 p-3 border"
                placeholder="問題文（必須）"
                autoFocus
                onChange={(e) => setQuestion(e.target.value)}
                required
                value={question}
              />
              <textarea
                className="w-full mt-5 p-3 border"
                placeholder="解答（必須）"
                onChange={(e) => setAnswer(e.target.value)}
                required
                value={answer}
              />
              {type.isShowAnswers() &&
                answers.map((it, i) => (
                  <textarea
                    className="w-full mt-5 p-3 border"
                    placeholder="解答（必須）"
                    onChange={(e) => {
                      setAnswers(
                        [...answers].map((it, index) =>
                          index === i ? e.target.value : it
                        )
                      );
                    }}
                    key={i}
                    value={it}
                    required
                  />
                ))}
              {type.isShowOthers() &&
                others.map((_, i) => (
                  <textarea
                    className="w-full mt-5 p-3 border"
                    placeholder="他の選択肢（必須）"
                    onChange={(e) => {
                      setOthers(
                        [...others].map((it, index) =>
                          index === i ? e.target.value : it
                        )
                      );
                    }}
                    key={i}
                    required
                  />
                ))}
              <textarea
                className="w-full mt-5 p-3 border"
                placeholder="解説（任意）"
                onChange={(e) => setExplanation(e.target.value)}
                value={explanation}
              />
              <div className="relative mt-5">
                <div className="absolute w-full border p-2 rounded">
                  <p>画像ファイルを選択</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="opacity-0 w-full h-full"
                />
              </div>
              <div className="mt-5">
                {type.isShowAuto() && (
                  <div className="p-2">
                    <input
                      type="checkbox"
                      id="isAuto"
                      onChange={(e) => {
                        setIsAuto(e.target.checked);
                      }}
                      checked={isAuto}
                    />
                    <label htmlFor="isAuto" className="ml-3">
                      他の選択肢の自動生成
                    </label>
                  </div>
                )}
                {type.isShowCheckOrder() && (
                  <div className="p-2">
                    <input
                      type="checkbox"
                      id="isCheckOrder"
                      onChange={(e) => {
                        setIsCheckOrder(e.target.checked);
                      }}
                      checked={isCheckOrder}
                    />
                    <label htmlFor="isCheckOrder" className="ml-3">
                      選択順序も正誤判定に含める
                    </label>
                  </div>
                )}
                <div className="p-2">
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
              </div>
              <div className="text-center mt-5">
                <button
                  className={`${
                    !validate && "cursor-not-allowed"
                  } w-full bg-transparent hover:bg-accent text-accent font-semibold hover:text-white py-2 px-4 border border-accent hover:border-transparent rounded`}
                  onClick={() => {
                    if (!validate) {
                      return;
                    }

                    type
                      .createQuestion({
                        testDocumentId: props.documentId,
                        question: question,
                        answer: answer,
                        answers: answers,
                        others: others,
                        auto: isAuto,
                        checkOrder: isCheckOrder,
                        explanation: explanation,
                        order: order,
                        imageRef: imageRef,
                      })
                      .then((question) => {
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
