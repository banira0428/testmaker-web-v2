type Props = {
  title: string;
  onClick(): void;
};

export default function ButtonPrimary(props: Props) {
  return (
    <button
      className="focus:outline-none bg-transparent hover:bg-accent text-accent font-semibold hover:text-white py-2 px-4 border border-accent hover:border-transparent rounded"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
