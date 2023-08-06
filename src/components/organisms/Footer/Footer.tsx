import { year } from "@/utils/date";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="h-10 flex items-center justify-center text-xs border-t border-solid border-sage-6">
      <p>
        <small>&copy; {`${year} Flash Code`}</small>
      </p>
    </footer>
  );
};
