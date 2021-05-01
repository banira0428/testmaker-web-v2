import firebase from "../init";
import { Test } from "../resources/test";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { User } from "@firebase/auth-types";
import { Question } from "../resources/question";

export type PagedTests = {
  tests: Test[];
  cursor: QueryDocumentSnapshot;
};

export const fetchPagedTests = async (
  userId: string,
  startAfter: QueryDocumentSnapshot
) => {
  const db = firebase.firestore();
  const docs =
    startAfter != null
      ? (
          await db
            .collection("tests")
            .where("userId", "==", userId)
            .orderBy("created_at", "desc")
            .startAfter(startAfter)
            .limit(10)
            .get()
        ).docs
      : (
          await db
            .collection("tests")
            .where("userId", "==", userId)
            .orderBy("created_at", "desc")
            .limit(10)
            .get()
        ).docs;
  return {
    tests: docs.map(
      (it) =>
        new Test(
          it.id,
          it.data().name,
          it.data().userId,
          it.data().userName,
          [],
          it.data().public,
          it.data().created_at.toDate(),
          it.data().color
        )
    ),
    cursor: docs.length >= 1 ? docs[docs.length - 1] : startAfter,
  };
};

export const createTest = async (
  name: string,
  isPublic: boolean,
  user: User
) => {
  const db = firebase.firestore();
  const ref = db.collection("tests").doc();

  const test = new Test(
    ref.id,
    name,
    user.uid,
    user.displayName,
    [],
    isPublic,
    new Date(),
    0
  );
  await ref.set(test.getData());
  return test;
};

export const deleteTest = async (documentId: string) => {
  const db = firebase.firestore();
  await db.collection("tests").doc(documentId).delete();
  return documentId;
};

export const fetchQuestions = async (documentId: string, limit: number) => {
  const db = firebase.firestore();
  const docs = (
    await db
      .collection("tests")
      .doc(documentId)
      .collection("questions")
      .orderBy("order")
      .limit(limit)
      .get()
  ).docs;
  return {
    questions: docs.map(
      (it) =>
        new Question(
          it.id,
          it.data().question,
          it.data().answer,
          it.data().answers,
          it.data().others,
          it.data().auto,
          it.data().checkOrder,
          it.data().created_at,
          it.data().explanation,
          it.data().order,
          it.data().type,
          it.data().imageRef
        )
    ),
  };
};

export const createQuestion = async (
  testDocumentId: string,
  question: string,
  answer: string,
  answers: string[],
  others: string[],
  auto: boolean,
  checkOrder: boolean,
  explanation: string,
  order: number,
  type: number,
  imageRef: string
) => {
  const db = firebase.firestore();
  const ref = db
    .collection("tests")
    .doc(testDocumentId)
    .collection("questions")
    .doc();

  const q = new Question(
    ref.id,
    question,
    answer,
    answers,
    others,
    auto,
    checkOrder,
    new Date(),
    explanation,
    order,
    type,
    imageRef
  );
  await ref.set(q.getData());
  return q;
};
