type Props = {
  title: string;
  isValid: boolean;
  isLoading: boolean;
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
        props.onClick();
      }}
      disabled={!props.isValid || props.isLoading }
    >
      <div className="flex justify-center">
        {props.isLoading ? (
          <svg viewBox="0 0 50 50" className="h-6 w-6">
            <path
              fill="#fff"
              d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        ) : (
          <p>{props.title}</p>
        )}
      </div>
    </button>
  );
}
