import { QuestionType, QUESTION_TYPES } from "../../lib/question_type";

type Props = {
  type: QuestionType;
  setType(type: QuestionType): void;
};

export default function QuestionTypeSelector(props: Props) {
  return (
    <div className="flex gap-4">
      {Object.values<QuestionType>(QUESTION_TYPES).map((it, i) => (
        <div
          key={i}
          className={`flex-1 mt-3 text-center border-2 ${
            props.type.name === it.name && "border-primary"
          } rounded`}
        >
          <input
            type="radio"
            id={`type-${i}`}
            name="type"
            className="hidden"
            onChange={() => props.setType(it)}
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
  );
}
