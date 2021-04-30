import { Test } from "../lib/resources/test";

type Props = {
  test: Test;
  onClick(): void;
};

export default function ItemTest(props: Props) {
  const COLOR_MAX = 8;

  return (
    <a className="cursor-pointer" onClick={() => props.onClick()}>
      <div className="flex py-6 pr-3 hover:bg-gray-100 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mr-6 flex-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke={`hsl(${(props.test.color / COLOR_MAX) * 360},50%,50%)`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <div>
          <p className="pb-3 font-bold text-xl">{props.test.name}</p>
          <p className="text-md">
            {props.test.public ? "全体公開" : "限定公開"}
          </p>
        </div>
      </div>
    </a>
  );
}
