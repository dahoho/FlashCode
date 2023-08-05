import { Container } from "@/components/organisms/Container";
import { Course } from "@/components/organisms/Course";

import React from "react";

const COURSE_ITEMS = [
  {
    title: "組み込みオブジェクト",
    link: "built-in",
    discription: "基本データを操作する",
  },
];

const CoursePage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center font-bold text-xl">JavaScript</h1>
      <p className="text-center text-sm mt-10">コースを選択してください。</p>
      <Course courseItems={COURSE_ITEMS} />
    </Container>
  );
};

export default CoursePage;
