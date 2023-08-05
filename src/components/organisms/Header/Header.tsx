"use client";

import { useMenuOpen } from "@/hooks/useMenuOpen";
import Link from "next/link";

const MENU_ITEMS = [
  {
    name: "TOP",
    link: "/",
  },
  {
    name: "言語一覧",
    link: "/lang",
  },
  {
    name: "JavaScript",
    link: "/lang/javascript",
  },
];

export const Header: React.FC = () => {
  const { isMenuOpen, handleMenuOpen } = useMenuOpen();

  return (
    <header className="h-14 flex items-center">
      <div className="flex justify-between px-5 w-full">
        <div>
          <Link href="/">Flash Code</Link>
        </div>
        <button className="z-50" onClick={handleMenuOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      <nav
        className={`translate-x-full ease-in duration-200 w-40 fixed top-0 right-0 bottom-0 h-100 bg-white ${
          isMenuOpen ? "translate-x-0" : ""
        }`}
      >
        <ul className="py-20 px-4 flex flex-col gap-3">
          {MENU_ITEMS.map((item, index) => (
            <li key={index}>
              <Link onClick={handleMenuOpen} className="text-sm" href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
