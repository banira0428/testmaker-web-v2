import { Question } from "./resources/question";
import { createQuestion } from "./services/firestore";

export type QuestionType = {
  name: string;
  minSizeOfAnswers(sizeOfAnswers: number, sizeOfOthers: number): number;
  minSizeOfOthers(sizeOfAnswers: number, sizeOfOthers: number): number;
  maxSizeOfAnswers(sizeOfAnswers: number, sizeOfOthers: number): number;
  maxSizeOfOthers(sizeOfAnswers: number, sizeOfOthers: number): number;
  isShowSingleAnswer(): boolean;
  isShowAnswers(): boolean;
  isShowOthers(): boolean;
  isShowAuto(): boolean;
  isShowCheckOrder(): boolean;
  validate(values: QuestionFormValuesForValidate): boolean;
  createQuestion(values: QuestionFormValues): Promise<Question>;
};

export type QuestionFormValuesForValidate = {
  question: string;
  answer: string;
  answers: string[];
  sizeOfAnswers: number;
  others: string[];
  sizeOfOthers: number;
  auto: boolean;
};

export type QuestionFormValues = {
  testDocumentId: string;
  question: string;
  answer: string;
  answers: string[];
  others: string[];
  auto: boolean;
  checkOrder: boolean;
  explanation: string;
  order: number;
  imageRef: string;
};

const QUESTION_WRITE: QuestionType = {
  name: "記述",
  minSizeOfAnswers: (sizeOfAnswers: number, sizeOfOthers: number) => 0,
  minSizeOfOthers: (sizeOfAnswers: number, sizeOfOthers: number) => 0,
  maxSizeOfAnswers: (sizeOfAnswers: number, sizeOfOthers: number) => 0,
  maxSizeOfOthers: (sizeOfAnswers: number, sizeOfOthers: number) => 0,
  isShowSingleAnswer: () => true,
  isShowAnswers: () => false,
  isShowOthers: () => false,
  isShowAuto: () => false,
  isShowCheckOrder: () => false,
  validate: (values: QuestionFormValuesForValidate) =>
    values.question !== "" && values.answer !== "",
  createQuestion: async (values: QuestionFormValues) => {
    const question = await createQuestion({
      testDocumentId: values.testDocumentId,
      question: values.question,
      answer: values.answer,
      answers: [],
      others: [],
      auto: false,
      checkOrder: false,
      explanation: values.explanation,
      order: values.order,
      type: 0,
      imageRef: values.imageRef,
    });
    return question;
  },
};

const QUESTION_SELECT: QuestionType = {
  name: "選択",
  minSizeOfAnswers: (sizeOfAnswers: number, sizeOfOthers: number) => 0,
  minSizeOfOthers: (sizeOfAnswers: number, sizeOfOthers: number) => 1,
  maxSizeOfAnswers: (sizeOfAnswers: number, sizeOfOthers: number) => 0,
  maxSizeOfOthers: (sizeOfAnswers: number, sizeOfOthers: number) => 5,
  isShowSingleAnswer: () => true,
  isShowAnswers: () => false,
  isShowOthers: () => true,
  isShowAuto: () => true,
  isShowCheckOrder: () => false,
  validate: (values: QuestionFormValuesForValidate) =>
    values.question !== "" &&
    (values.others.slice(0, values.sizeOfOthers).every((it) => it !== "") ||
      values.auto),
  createQuestion: async (values: QuestionFormValues) => {
    const question = await createQuestion({
      testDocumentId: values.testDocumentId,
      question: values.question,
      answer: values.answer,
      answers: [],
      others: values.others,
      auto: values.auto,
      checkOrder: false,
      explanation: values.explanation,
      order: values.order,
      type: 1,
      imageRef: values.imageRef,
    });
    return question;
  },
};

const QUESTION_MULTIPLE: QuestionType = {
  name: "完答",
  minSizeOfAnswers: (sizeOfAnswers: number, sizeOfOthers: number) => 1,
  minSizeOfOthers: (sizeOfAnswers: number, sizeOfOthers: number) => 0,
  maxSizeOfAnswers: (sizeOfAnswers: number, sizeOfOthers: number) => 4,
  maxSizeOfOthers: (sizeOfAnswers: number, sizeOfOthers: number) => 0,
  isShowSingleAnswer: () => false,
  isShowAnswers: () => true,
  isShowOthers: () => false,
  isShowAuto: () => false,
  isShowCheckOrder: () => true,
  validate: (values: QuestionFormValuesForValidate) =>
    values.question !== "" &&
    values.answers.slice(0, values.sizeOfAnswers).every((it) => it !== ""),
  createQuestion: async (values: QuestionFormValues) => {
    const question = await createQuestion({
      testDocumentId: values.testDocumentId,
      question: values.question,
      answer: "",
      answers: values.answers,
      others: [],
      auto: false,
      checkOrder: values.checkOrder,
      explanation: values.explanation,
      order: values.order,
      type: 2,
      imageRef: values.imageRef,
    });
    return question;
  },
};

const QUESTION_MULTIPLE_SELECT: QuestionType = {
  name: "選択完答",
  minSizeOfAnswers: (sizeOfAnswers: number, sizeOfOthers: number) =>
    sizeOfOthers > 0 ? 0 : 1,
  minSizeOfOthers: (sizeOfAnswers: number, sizeOfOthers: number) =>
    sizeOfAnswers > 0 ? 0 : 1,
  maxSizeOfAnswers: (sizeOfAnswers: number, sizeOfOthers: number) =>
    6 - sizeOfOthers,
  maxSizeOfOthers: (sizeOfAnswers: number, sizeOfOthers: number) =>
    6 - sizeOfAnswers,
  isShowSingleAnswer: () => false,
  isShowAnswers: () => true,
  isShowOthers: () => true,
  isShowAuto: () => true,
  isShowCheckOrder: () => true,
  validate: (values: QuestionFormValuesForValidate) =>
    values.question !== "" &&
    values.answers.slice(0, values.sizeOfAnswers).every((it) => it !== "") &&
    (values.others.slice(0, values.sizeOfOthers).every((it) => it !== "") ||
      values.auto),
  createQuestion: async (values: QuestionFormValues) => {
    const question = await createQuestion({
      testDocumentId: values.testDocumentId,
      question: values.question,
      answer: "",
      answers: values.answers,
      others: values.others,
      auto: values.auto,
      checkOrder: values.checkOrder,
      explanation: values.explanation,
      order: values.order,
      type: 3,
      imageRef: values.imageRef,
    });
    return question;
  },
};

export const QUESTION_TYPES = {
  WRITE: QUESTION_WRITE,
  SELECT: QUESTION_SELECT,
  MULTIPLE: QUESTION_MULTIPLE,
  MULTIPLE_SELECT: QUESTION_MULTIPLE_SELECT,
};
