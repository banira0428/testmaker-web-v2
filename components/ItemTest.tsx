export default function ItemTest({ title }) {
  return (
    <a href="#">
      <div className="flex py-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <div>
          <p className="pl-3 pb-3 font-bold text-xl">{title}</p>
          <p className="pl-3 text-md">限定公開</p>
        </div>
      </div>
    </a>
  );
}