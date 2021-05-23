import firebase from "../lib/init";
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Heading from "./Heading";

export default function LoginForm() {
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: "redirect",
    signInSuccessUrl: "/dashboard",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: "https://ankimaker.com/terms",
    privacyPolicyUrl: "https://ankimaker.com/privacy",
  };
  return (
    <div className="mx-auto max-w-xl p-3">
      <Heading title={"Login"} subTitle={"ログイン"} />
      <p className="mb-6">
        ブラウザ上で問題集を管理したい場合は、ログインをお願いします。
      </p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
