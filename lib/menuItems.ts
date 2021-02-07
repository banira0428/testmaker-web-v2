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
    title: "プライバシーポリシー",
    link: "/privacy"
  },
  {
    title: "利用規約",
    link: "/terms"
  },
]