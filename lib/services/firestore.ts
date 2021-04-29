import firebase from "../init";
import { Test } from "../resources/test";

export const fetchTests = async (userId: string) => {
  const db = firebase.firestore();
  const docs = (
    await db.collection("tests").where("userId", "==", userId).get()
  ).docs.map(
    (it) =>
      new Test(it.id, it.data().name, it.data().userId, [], it.data().public)
  );
  return docs;
};
