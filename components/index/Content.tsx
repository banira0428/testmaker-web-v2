import Link from "next/link";

export default function Content({ title, content, img, link = "" }) {
  return (
    <div className="bg-primary p-5 m-4 rounded shadow text-white flex flex-col">
      <h2 className="text-2xl mb-3 font-bold">{title}</h2>
      <p className="flex-grow">{content}</p>
      <div className="max-w-xs mx-auto">
        <img src={img} className="p-12" alt={"紹介画像"} />
      </div>
      {link !== "" && (
        <Link href={link}>
          <a className="flex cursor-pointer mr-0 ml-auto">
            <p className="">詳しく見る</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      )}
    </div>
  );
}
