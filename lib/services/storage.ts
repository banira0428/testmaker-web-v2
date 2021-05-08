import firebase from "../init";

export const postImage = async (data: File, userId: string) => {
  if (data === null) throw "image is null";

  const storage = firebase.storage();
  const imageRef = `${userId}/${new Date().getTime()}`
  await storage
    .ref()
    .child(imageRef)
    .put(data, { contentType: "image/jpeg" });
  return imageRef;
};

export const getDownloadUrl = async (imageRef: string) => {
  const storage = firebase.storage();
  const imageUrl = await storage
    .ref()
    .child(imageRef)
    .getDownloadURL();

  return imageUrl
}
