import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="h-14 flex items-center">
      <div className="flex justify-between px-5">
        <div>
          <Link href="/">Flash Code</Link>
        </div>
        {/* <nav>
          <ul>
            <li>JavaScript</li>
            <li>テスト</li>
            <li>テスト</li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};
