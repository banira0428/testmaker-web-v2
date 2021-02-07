interface MenuItem {
  title: string
  link: string
}

export const menuItems: MenuItem[] = [
  {
    title: "トップページ",
    link: "/"
  },
  {
    title: "よくある質問",
    link: "/guide"
  },
  {
    title: "お問い合わせ",
    link: "https://forms.gle/MW6JMFmKRUop2enx8"
  },
  {
    title: "プライバシーポリシー",
    link: "/privacy"
  },
  {
    title: "利用規約",
    link: "/terms"
  },
]