import { useState, useEffect, useContext } from "react";
import Transition from "react-transition-group/cjs/Transition";
import { Question } from "../lib/resources/question";
import { ToastContext } from "./ToastContext";
import { QuestionType, QUESTION_TYPES } from "../lib/question_type";
import { AuthContext } from "./authContext";
import Plus from "./question/Plus";
import Minus from "./question/Minus";
import ImageEditor from "./question/ImageEditor";
import ValidatableButton from "./question/ValidatableButton";
import CheckBox from "./question/CheckBox";

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

  const { currentUser } = useContext(AuthContext);
  const { _, setMessage } = useContext(ToastContext);
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [isCheckOrder, setIsCheckOrder] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>(Array(ANSWERS_MAX).fill(""));
  const [sizeOfAnswers, setSizeOfAnswers] = useState<number>(2);
  const [others, setOthers] = useState<string[]>(Array(OTHERS_MAX).fill(""));
  const [sizeOfOthers, setSizeOfOthers] = useState<number>(2);
  const [explanation, setExplanation] = useState<string>("");
  const [image, setImage] = useState<File>(null);
  const [validate, setValidate] = useState<boolean>(false);
  const [type, setType] = useState<QuestionType>(QUESTION_TYPES.WRITE);

  const [order, setOrder] = useState<number>(props.order);
  const [isContinuous, setIsContinuous] = useState<boolean>(true);

  useEffect(() => {
    setOrder(props.order);
  }, [props.order]);

  const resetForm = () => {
    setQuestion("");
    setAnswer("");
    setAnswers(Array(ANSWERS_MAX).fill(""));
    setOthers(Array(OTHERS_MAX).fill(""));
    setExplanation("");
    setImage(null);
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
  }, [
    question,
    answer,
    answers,
    sizeOfAnswers,
    others,
    sizeOfOthers,
    type,
    isAuto,
  ]);

  useEffect(() => {
    setOthers(Array(OTHERS_MAX).fill(isAuto ? "自動生成" : ""));
  }, [isAuto]);

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
              <h3 className="text-xl md:text-2xl font-bold mr-auto ml-0 sticky">
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
                      onChange={() => setType(it)}
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

              <div className="mt-3">
                <label htmlFor="question" className="font-semibold ">
                  問題文
                </label>
                <textarea
                  className="w-full p-1 border-2 mt-2"
                  placeholder="問題文（必須）"
                  autoFocus
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  id="question"
                />
              </div>
              {type.isShowSingleAnswer() && (
                <div className="mt-3">
                  <label htmlFor="answer" className="font-semibold">
                    解答
                  </label>
                  <textarea
                    className="w-full mt-2 p-1 border-2"
                    placeholder="解答（必須）"
                    onChange={(e) => setAnswer(e.target.value)}
                    value={answer}
                    id="answer"
                  />
                </div>
              )}
              {type.isShowAnswers() && (
                <div className="mt-3">
                  <div className="flex flex-row items-center gap-2">
                    <label className="font-semibold">解答</label>
                    <div className="flex-grow" />
                    <Minus
                      onClick={() => {
                        setSizeOfAnswers(
                          Math.max(
                            sizeOfAnswers - 1,
                            type.minSizeOfAnswers(sizeOfAnswers, sizeOfOthers)
                          )
                        );
                      }}
                    />
                    <Plus
                      onClick={() => {
                        setSizeOfAnswers(
                          Math.min(
                            sizeOfAnswers + 1,
                            type.maxSizeOfAnswers(sizeOfAnswers, sizeOfOthers)
                          )
                        );
                      }}
                    />
                  </div>
                  {answers.slice(0, sizeOfAnswers).map((it, i) => (
                    <textarea
                      className="w-full mt-2 p-1 border-2"
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
                    />
                  ))}
                </div>
              )}
              {type.isShowOthers() && (
                <div className="mt-3">
                  <div className="flex flex-row items-center gap-2">
                    <label className="font-semibold">他の選択肢</label>
                    <div className="flex-grow" />
                    <Minus
                      onClick={() => {
                        setSizeOfOthers(
                          Math.max(
                            sizeOfOthers - 1,
                            type.minSizeOfOthers(sizeOfAnswers, sizeOfOthers)
                          )
                        );
                      }}
                    />
                    <Plus
                      onClick={() =>
                        setSizeOfOthers(
                          Math.min(
                            sizeOfOthers + 1,
                            type.maxSizeOfOthers(sizeOfAnswers, sizeOfOthers)
                          )
                        )
                      }
                    />
                  </div>
                  {others.slice(0, sizeOfOthers).map((it, i) => (
                    <textarea
                      className="w-full mt-2 p-1 border-2"
                      placeholder="他の選択肢（必須）"
                      onChange={(e) => {
                        setOthers(
                          [...others].map((it, index) =>
                            index === i ? e.target.value : it
                          )
                        );
                      }}
                      key={i}
                      value={it}
                      disabled={isAuto}
                    />
                  ))}
                </div>
              )}
              <div className="mt-3">
                <label htmlFor="explanation" className="font-semibold">
                  解説
                </label>
                <textarea
                  className="w-full mt-2 p-1 border-2"
                  placeholder="解説（任意）"
                  onChange={(e) => setExplanation(e.target.value)}
                  value={explanation}
                  id="explanation"
                />
              </div>
              <ImageEditor setImage={setImage} image={image} />
              <div className="mt-5">
                {type.isShowAuto() && (
                  <CheckBox
                    id="isAuto"
                    label="他の選択肢の自動生成"
                    isChecked={isAuto}
                    onChange={(checked) => setIsAuto(checked)}
                  />
                )}
                {type.isShowCheckOrder() && (
                  <CheckBox
                    id="isCheckOrder"
                    label="選択順序も正誤判定に含める"
                    isChecked={isCheckOrder}
                    onChange={(checked) => setIsCheckOrder(checked)}
                  />
                )}
                <CheckBox
                  id="isContinuous"
                  label="問題を続けて追加する（保存後もダイアログを表示したままにする）"
                  isChecked={isContinuous}
                  onChange={(checked) => setIsContinuous(checked)}
                />
              </div>
              <div className="text-center mt-5">
                <ValidatableButton
                  title="追加して保存"
                  isValid={validate}
                  onClick={() => {
                    type
                      .createQuestion({
                        testDocumentId: props.documentId,
                        userId: currentUser.uid,
                        question: question,
                        answer: answer,
                        answers: answers,
                        others: others,
                        auto: isAuto,
                        checkOrder: isCheckOrder,
                        explanation: explanation,
                        order: order,
                        image: image,
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
                />
              </div>
            </div>
          </div>
        );
      }}
    </Transition>
  );
}
