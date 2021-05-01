import React, { useEffect, useState } from "react";
import { Question } from "../lib/resources/question";
import { fetchQuestions } from "../lib/services/firestore";
import Button from "./Button";
import CreateQuestionDialog from "./CreateQuestionDialog";

type Props = {
  documentId: string;
  onClick(question: Question): void;
};

export default function Questions(props: Props) {
  const QUESTIONS_MAX = 500;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [
    isShowCreateQuestionDialog,
    setIsShowCreateQuestionDialog,
  ] = useState<boolean>(false);

  useEffect(() => {
    fetchQuestions(props.documentId, QUESTIONS_MAX).then((result) => {
      setQuestions(result.questions);
    });
  }, [props.documentId]);

  return (
    <div>
      <div className="flex justify-items-center">
        <h4 className="text-xl md:text-2xl font-bold  mr-auto ml-0 mt-5 mb-3">
          問題一覧
        </h4>
        <div className="flex-glow-1" />
        <div className="my-auto">
          <Button
            title={"+ 新規作成"}
            onClick={() => {
              if (questions.length >= QUESTIONS_MAX) {
                alert(
                  `1つの問題集に保存できる問題数は${QUESTIONS_MAX}問までです`
                );
                return;
              }
              setIsShowCreateQuestionDialog(true);
            }}
            theme={"accent"}
          />
        </div>
      </div>
      {questions.map((question) => (
        <div key={question.id} className="cursor-pointer hover:bg-gray-100 p-3">
          <p className="overflow-ellipsis overflow-hidden max-h-12 leading-6">
            {question.question}
          </p>
          <p className="overflow-ellipsis overflow-hidden max-h-12 leading-6 mt-3">
            {question.answer}
          </p>
        </div>
      ))}
      <CreateQuestionDialog
        order={questions.length > 1 ? questions[questions.length -1].order : -1}
        documentId={props.documentId}
        isShow={isShowCreateQuestionDialog}
        setIsShow={setIsShowCreateQuestionDialog}
        onCreateQuestion={(question) => {}}
      />
    </div>
  );
}
