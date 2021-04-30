type Props = {
  title: string;
  onClick(): void;
};

export default function ButtonPrimary(props: Props) {
  return (
    <button
      className="focus:outline-none bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
