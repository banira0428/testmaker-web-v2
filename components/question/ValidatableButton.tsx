type Props = {
  title: string;
  isValid: boolean;
  onClick(): void;
};

export default function ValidatableButton(props: Props) {
  return (
    <button
      className={`${
        props.isValid
          ? "hover:bg-accent hover:text-white text-accent border-accent"
          : "cursor-not-allowed text-gray-400 border-gray-400"
      } w-full bg-transparent  font-semibold py-2 px-4 border  rounded`}
      onClick={() => {
        if (!props.isValid) {
          return;
        }
        props.onClick();
      }}
    >
      {props.title}
    </button>
  );
}
