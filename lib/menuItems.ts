import { User } from "@firebase/auth-types";
import firebase from "./init";
interface MenuItem {
  title: string;
  link: string;
  isShow(user: User): boolean;
  action(): void;
}

export const menuItems: MenuItem[] = [
  {
    title: "問題集の管理",
    link: "/dashboard",
    isShow: (user: User) => user != null,
    action: () => {},
  },
  {
    title: "トップページ",
    link: "/",
    isShow: (user: User) => true,
    action: () => {},
  },
  {
    title: "よくある質問",
    link: "/guide",
    isShow: (user: User) => true,
    action: () => {},
  },
  {
    title: "お問い合わせ",
    link: "https://forms.gle/MW6JMFmKRUop2enx8",
    isShow: (user: User) => true,
    action: () => {},
  },
  {
    title: "プライバシーポリシー",
    link: "/privacy",
    isShow: (user: User) => true,
    action: () => {},
  },
  {
    title: "利用規約",
    link: "/terms",
    isShow: (user: User) => true,
    action: () => {},
  },
  {
    title: "ログイン",
    link: "/login",
    isShow: (user: User) => user == null || user == undefined,
    action: () => {},
  },
  {
    title: "ログアウト",
    link: "/",
    isShow: (user: User) => user != null,
    action: () => {
      if (window.confirm("ログアウトしますか？")) {
        firebase.auth().signOut();
        window.location.reload();
      }
    },
  },
];
