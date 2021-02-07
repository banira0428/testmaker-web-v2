import Link from "next/link";
import {menuItems} from "../lib/menuItems";

interface FooterMenu {
  title: string
  link: string
}

export default function Footer() {

  return (
    <footer className="bg-primary p-2">
      <div className="max-w-5xl mx-auto">
        <img src="img/logo_text.webp" className="w-1/2 max-w-xs"/>
        <ul>
          {
            menuItems.map((it) =>
              <li key={it.title} className="mb-1 ml-2">
                <Link href={it.link}>
                  <a className="text-white text-sm">
                    {it.title}
                  </a>
                </Link>
              </li>
            )
          }
        </ul>
        <p className="text-sm text-white text-right">
          ©2021 ke-ta
        </p>
      </div>
    </footer>
  )
}