import React, { useEffect, useState } from "react";
import { Question } from "../lib/resources/question";
import { fetchQuestions } from "../lib/services/firestore";
import Button from "./Button";
import CreateQuestionDialog from "./CreateQuestionDialog";
import EditQuestionDialog from "./EditQuestionDialog";
import Loading from "./Loading";
import ItemQuestion from "./question/ItemQuestion";

type Props = {
  documentId: string;
};

export default function Questions(props: Props) {
  const QUESTIONS_MAX = 500;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [
    isShowCreateQuestionDialog,
    setIsShowCreateQuestionDialog,
  ] = useState<boolean>(false);

  const [
    isShowEditQuestionDialog,
    setIsShowEditQuestionDialog,
  ] = useState<boolean>(false);

  const [selectedQuestion, setSelectedQuestion] = useState<Question>(null);

  useEffect(() => {
    setQuestions([]);
    setIsLoading(true);
    fetchQuestions(props.documentId, QUESTIONS_MAX).then((result) => {
      setQuestions(result.questions);
      setIsLoading(false);
    });
  }, [props.documentId]);

  return (
    <div>
      <div className="flex justify-items-center">
        <h4 className="text-2xl md:text-3xl font-bold  mr-auto ml-0 mt-5 mb-3">
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
      <Loading isLoading={isLoading} />
      {questions.map((question) => (
        <ItemQuestion
          key={question.id}
          question={question}
          onClick={(question: Question) => {
            setIsShowEditQuestionDialog(true);
            setSelectedQuestion(question);
          }}
        />
      ))}
      {!isShowCreateQuestionDialog && (
        <EditQuestionDialog
          documentId={props.documentId}
          isShow={isShowEditQuestionDialog}
          setIsShow={setIsShowEditQuestionDialog}
          onEditQuestion={(question) => {
            setQuestions(
              [...questions].map((it) =>
                question.id === it.id ? question : it
              )
            );
          }}
          onDeleteQuestion={(documentId: string) => {
            setQuestions(questions.filter((it) => it.id !== documentId));
          }}
          question={selectedQuestion}
        />
      )}
      {!isShowEditQuestionDialog && (
        <CreateQuestionDialog
          order={
            questions.length > 1 ? questions[questions.length - 1].order : -1
          }
          documentId={props.documentId}
          isShow={isShowCreateQuestionDialog}
          setIsShow={setIsShowCreateQuestionDialog}
          onCreateQuestion={(question) => {
            setQuestions(questions.concat([question]));
          }}
        />
      )}
    </div>
  );
}
