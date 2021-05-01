export type QuestionType = {
  name: string;
  isShowSingleAnswer(): boolean;
  isShowAnswers(): boolean;
  isShowOthers(): boolean;
  isShowAuto(): boolean;
  isShowCheckOrder(): boolean;
  validate(values: QuestionFormValues): boolean;
};

export type QuestionFormValues = {
  question: string;
  answer: string;
  answers: string[];
  sizeOfAnswers: number;
  others: string[];
  sizeOfOthers: number;
  auto: boolean;
};

const QUESTION_WRITE: QuestionType = {
  name: "記述",
  isShowSingleAnswer: () => true,
  isShowAnswers: () => false,
  isShowOthers: () => false,
  isShowAuto: () => false,
  isShowCheckOrder: () => false,
  validate: (values: QuestionFormValues) =>
    values.question !== "" && values.answer !== "",
};

const QUESTION_SELECT: QuestionType = {
  name: "選択",
  isShowSingleAnswer: () => true,
  isShowAnswers: () => false,
  isShowOthers: () => true,
  isShowAuto: () => true,
  isShowCheckOrder: () => false,
  validate: (values: QuestionFormValues) =>
    values.question !== "" &&
    (Array(values.sizeOfOthers).every((_, i) => values.others[i] !== "") ||
      values.auto),
};

const QUESTION_MULTIPLE: QuestionType = {
  name: "完答",
  isShowSingleAnswer: () => false,
  isShowAnswers: () => true,
  isShowOthers: () => false,
  isShowAuto: () => false,
  isShowCheckOrder: () => true,
  validate: (values: QuestionFormValues) =>
    values.question !== "" &&
    Array(values.sizeOfAnswers).every((_, i) => values.answers[i] !== ""),
};

const QUESTION_MULTIPLE_SELECT: QuestionType = {
  name: "選択完答",
  isShowSingleAnswer: () => false,
  isShowAnswers: () => true,
  isShowOthers: () => true,
  isShowAuto: () => true,
  isShowCheckOrder: () => true,
  validate: (values: QuestionFormValues) =>
    values.question !== "" &&
    Array(values.sizeOfAnswers).every((_, i) => values.answers[i] !== "") &&
    (Array(values.sizeOfOthers).every((_, i) => values.others[i] !== "") ||
      values.auto),
};

export const QUESTION_TYPES = {
  WRITE: QUESTION_WRITE,
  SELECT: QUESTION_SELECT,
  MULTIPLE: QUESTION_MULTIPLE,
  MULTIPLE_SELECT: QUESTION_MULTIPLE_SELECT,
};
