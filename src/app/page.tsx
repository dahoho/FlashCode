import { Container } from "@/components/organisms/Container";
import { Card } from "@tremor/react";
import Link from "next/link";

const LANGUAGE_ITEMS = [
  {
    title: "JavaScript",
    discription: "動的なWebページを作成するために使用されるプログラミング言語",
  },
  {
    title: "Comming soon",
    discription: "説明文が入ります。",
  },
];

const Home = () => {
  return (
    <Container>
      <h1 className="text-center font-medium text-xl text-navy">言語一覧</h1>
      <ul className="mt-6 grid gap-5">
        {LANGUAGE_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href="">
              <Card>
                <h2 className="text-center text-lg font-medium">{item.title}</h2>
                <p className="mt-3">{item.discription}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-xs leading-5">
        <p>
          当アプリは、フラッシュカードを活用してプログラミング言語学習を効率化することを目的としています。
          <br />
          フラッシュカードは外国語の学習でよく使われる有用なツールです。
          <br />
          プログラミング言語の文法を含め、何かを素早く学ぶ最適な方法です。
          <br />
          比較的少ない労力で、プログラミング言語の基本的な文法の大部分を効率的に学ぶことができます。
        </p>
      </div>
    </Container>
  );
};

export default Home;
