type Props = {
  title: string;
  theme: "primary" | "accent" | "danger";
  onClick(): void;
}

export default function Button(props: Props) {
  return (
    <button
      className={`focus:outline-none bg-transparent hover:bg-${props.theme} text-${props.theme} font-semibold hover:text-white py-2 px-4 border border-${props.theme} hover:border-transparent rounded`}
      onClick={() => props.onClick()}
    >
      {props.title}
    </button>
  );
}