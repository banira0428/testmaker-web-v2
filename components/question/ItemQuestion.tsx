import { Question } from "../../lib/resources/question";

type Props = {
  question: Question;
  onClick(question: Question): void;
};

export default function ItemQuestion(props: Props) {
  return (
    <div
      className="cursor-pointer hover:bg-gray-100 p-3"
      onClick={() => props.onClick(props.question)}
    >
      <p className="overflow-ellipsis overflow-hidden max-h-12 leading-6">
        {props.question.question}
      </p>
      <p className="overflow-ellipsis overflow-hidden max-h-12 leading-6 mt-3">
        {props.question.answer}
      </p>
    </div>
  );
}
