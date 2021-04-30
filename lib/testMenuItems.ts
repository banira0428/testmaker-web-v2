interface TestMenuItem {
  title: string;
  action(): void;
}

export const testMenuItems: TestMenuItem[] = [
  {
    title: "編集",
    action: () => {},
  },
  {
    title: "共有",
    action: () => {},
  },
  {
    title: "削除",
    action: () => {},
  },
];
