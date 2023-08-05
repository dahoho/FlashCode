import { Container } from "@/components/organisms/Container";
import Link from "next/link";

const LANGUAGE_ITEMS = [
  {
    title: "JavaScript",
    discription: "動的なWebページを作成するために使用されるプログラミング言語",
    link: "javascript",
  },
];

const LangPage = () => {
  return (
    <Container>
      <h1 className="text-center font-medium text-xl text-navy">言語一覧</h1>
      <p className="text-center mt-10 text-sm">学習したい言語を選んでください。</p>
      <ul className="mt-6 grid gap-5">
        {LANGUAGE_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={`lang/${item.link}/`}>
              <div className="card">
                <p className="font-medium text-lg">{item.title}</p>
                {item.discription && <p className="text-sm mt-2">{item.discription}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default LangPage;
