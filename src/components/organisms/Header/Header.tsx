import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="h-14 flex items-center">
      <div className="flex justify-between px-5 w-full">
        <div>
          <Link href="/">Flash Code</Link>
        </div>
        <div>
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
        </div>
      </div>
    </header>
  );
};
