import { Container } from "@/components/organisms/Container";
import Link from "next/link";

const COURSE_ITEMS = [
  {
    title: "コアJavaScript",
    link: "core",
  },
  {
    title: "クライアントサイドJavaScript",
    link: "client",
  },
];

const Course = () => {
  return (
    <Container>
      <p className="text-center">コースを選択してください。</p>
      <ul className="grid gap-5 mt-8">
        {COURSE_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={`/lang/javascript/category/${item.link}/`}>
              <div className="card">
                <p className="font-medium">{item.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Course;
