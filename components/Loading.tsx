type Props = {
  isLoading: boolean;
};

export default function Loading(props: Props) {
  return (
    <div>
      {props.isLoading && (
        <div className="p-12 text-center">
          <svg viewBox="0 0 50 50" className="mx-auto h-12 w-12">
            <path
              fill="currentColor"
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
          <p>読み込み中</p>
        </div>
      )}
    </div>
  );
}
