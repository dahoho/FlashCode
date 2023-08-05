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
      <Course courseItems={COURSE_ITEMS} />
    </Container>
  );
};

export default CoursePage;
