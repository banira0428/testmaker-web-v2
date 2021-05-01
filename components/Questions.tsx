import React, { useEffect, useState } from "react";
import { Question } from "../lib/resources/question";
import { fetchQuestions, PagedQuestions } from "../lib/services/firestore";
import Button from "./Button";

type Props = {
  documentId: string;
  onClick(question: Question): void;
};

export default function Questions(props: Props) {
  const [pagedQuestions, setPagedQuestions] = useState<PagedQuestions>({
    questions: [],
    cursor: null,
    isLastPage: false,
  });

  const buildItemModels = (documentId, cursor) => {
    fetchQuestions(documentId, cursor).then((result: PagedQuestions) => {
      setPagedQuestions({
        questions: pagedQuestions.questions.concat(result.questions),
        cursor: result.cursor,
        isLastPage: result.isLastPage
      });
    });
  };

  useEffect(() => {
    fetchQuestions(props.documentId, null).then((result: PagedQuestions) => {
      setPagedQuestions(result);
    });
  }, [props.documentId]);

  return (
    <div>
      <h4 className="text-xl md:text-2xl font-bold  mr-auto ml-0 mt-5 mb-3">
        問題一覧
      </h4>
      {pagedQuestions.questions.map((question) => (
        <div key={question.id} className="cursor-pointer hover:bg-gray-100 p-3">
          <p className="overflow-ellipsis overflow-hidden">
            {question.question}
          </p>
          <p className="overflow-ellipsis overflow-hidden">{question.answer}</p>
        </div>
      ))}
      {!pagedQuestions.isLastPage && (
        <div className="w-full text-center mt-5">
          <Button title={"もっと見る"} onClick={() => {
            buildItemModels(props.documentId, pagedQuestions.cursor)
          }} theme={"primary"} />
        </div>
      )}
    </div>
  );
}
