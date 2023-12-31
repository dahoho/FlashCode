import Link from "next/link";
import React from "react";

type CourseItem = {
  title: string;
  link: string;
  discription: string;
};

type CourseItemsProps = {
  courseItems: CourseItem[];
};

export const Course: React.FC<CourseItemsProps> = ({ courseItems }) => {
  return (
    <ul className="grid gap-5 mt-8">
      {courseItems.map((item, index) => (
        <li key={index}>
          <Link href={`/lang/javascript/category/${item.link}/`}>
            <div className="card">
              <p className="font-medium text-lg">{item.title}</p>
              <p className="text-xs mt-2">{item.discription}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
