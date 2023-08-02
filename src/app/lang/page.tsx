import { Container } from "@/components/organisms/Container";
import { Card } from "@tremor/react";
import Link from "next/link";

const LANGUAGE_ITEMS = [
  {
    title: "JavaScript",
    discription: "動的なWebページを作成するために使用されるプログラミング言語",
    link: "javascript",
  },
  {
    title: "Comming soon",
    discription: "説明文が入ります。",
  },
];

const Lang = () => {
  return (
    <Container>
      <h1 className="text-center font-medium text-xl text-navy">言語一覧</h1>
      <p className="text-center mt-8">学習したいコースを選んでください。</p>
      <ul className="mt-6 grid gap-5">
        {LANGUAGE_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={`lang/${item.link}/`}>
              <Card>
                <h2 className="text-center text-lg font-medium">{item.title}</h2>
                <p className="mt-3">{item.discription}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Lang;