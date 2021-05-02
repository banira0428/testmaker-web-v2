import { QUESTION_TYPES } from "./question_type";

test("normal - valid data", () => {
  const type = QUESTION_TYPES.WRITE;
  expect(
    type.validate({
      question: "question",
      answer: "answer",
      answers: [],
      sizeOfAnswers: 0,
      others: [],
      sizeOfOthers: 0,
      auto: false,
    })
  ).toBe(true);
});

test("normal - no answer", () => {
  const type = QUESTION_TYPES.WRITE;
  expect(
    type.validate({
      question: "question",
      answer: "",
      answers: [],
      sizeOfAnswers: 0,
      others: [],
      sizeOfOthers: 0,
      auto: false,
    })
  ).toBe(false);
});

test("normal - no question", () => {
  const type = QUESTION_TYPES.WRITE;
  expect(
    type.validate({
      question: "",
      answer: "answer",
      answers: [],
      sizeOfAnswers: 0,
      others: [],
      sizeOfOthers: 0,
      auto: false,
    })
  ).toBe(false);
});

test("normal - no question and answer", () => {
  const type = QUESTION_TYPES.WRITE;
  expect(
    type.validate({
      question: "",
      answer: "",
      answers: [],
      sizeOfAnswers: 0,
      others: [],
      sizeOfOthers: 0,
      auto: false,
    })
  ).toBe(false);
});

test("select - valid data", () => {
  const type = QUESTION_TYPES.WRITE;
  expect(
    type.validate({
      question: "question",
      answer: "answer",
      answers: [],
      sizeOfAnswers: 0,
      others: ["other", ""],
      sizeOfOthers: 1,
      auto: false,
    })
  ).toBe(true);
});

test("select - valid data (auto)", () => {
  const type = QUESTION_TYPES.WRITE;
  expect(
    type.validate({
      question: "question",
      answer: "answer",
      answers: [],
      sizeOfAnswers: 0,
      others: [""],
      sizeOfOthers: 1,
      auto: true,
    })
  ).toBe(true);
});

test("select - no others", () => {
  const type = QUESTION_TYPES.SELECT;
  expect(
    type.validate({
      question: "question",
      answer: "answer",
      answers: [],
      sizeOfAnswers: 0,
      others: ["","","","","",""],
      sizeOfOthers: 1,
      auto: false,
    })
  ).toBe(false);
});

test("select - lack others", () => {
  const type = QUESTION_TYPES.SELECT;
  expect(
    type.validate({
      question: "question",
      answer: "answer",
      answers: [],
      sizeOfAnswers: 0,
      others: ["other","","","","",""],
      sizeOfOthers: 2,
      auto: false,
    })
  ).toBe(false);
});
