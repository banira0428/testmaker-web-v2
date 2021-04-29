import { logout } from "../lib/firebase_auth";
interface MenuItem {
  title: string;
  link: string;
  isShow(user: any): boolean;
  action(): void;
}

export const menuItems: MenuItem[] = [
  {
    title: "トップページ",
    link: "/",
    isShow: (user: any) => true,
    action: () => {},
  },
  {
    title: "よくある質問",
    link: "/guide",
    isShow: (user: any) => true,
    action: () => {},
  },
  {
    title: "お問い合わせ",
    link: "https://forms.gle/MW6JMFmKRUop2enx8",
    isShow: (user: any) => true,
    action: () => {},
  },
  {
    title: "プライバシーポリシー",
    link: "/privacy",
    isShow: (user: any) => true,
    action: () => {},
  },
  {
    title: "利用規約",
    link: "/terms",
    isShow: (user: any) => true,
    action: () => {},
  },
  {
    title: "ログイン",
    link: "/login",
    isShow: (user: any) => user == null,
    action: () => {},
  },
  {
    title: "ログアウト",
    link: "/",
    isShow: (user: any) => user != null,
    action: () => {
      if (window.confirm('ログアウトしますか？')) logout();
    },
  },
];
