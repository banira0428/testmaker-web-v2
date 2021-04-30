import firebase from "../init";
import { Test } from "../resources/test";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { User } from "@firebase/auth-types";

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
