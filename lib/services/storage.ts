import firebase from "../init";

export const postImage = async (data: File, userId: string) => {
  if (data === null) throw "image is null";

  const storage = firebase.storage();
  const snapshot = await storage
    .ref()
    .child(`${userId}/${new Date().getTime()}`)
    .put(data, { contentType: "image/jpeg" });
  const imageRef = await snapshot.ref.getDownloadURL();
  return imageRef;
};
