import { Container } from "@/components/organisms/Container";
import { Button } from "@tremor/react";
import Link from "next/link";

const Home = () => {
  return (
    <Container>
      <div className="mt-6 leading-8 text-sm">
        <p>
          当アプリは、フラッシュカードを活用してプログラミング言語学習を効率化することを目的としています。
          <br />
          フラッシュカードは外国語の学習でよく使われる有用なツールです。
          <br />
          プログラミング言語の文法を含め、何かを素早く学ぶ最適な方法です。
          <br />
          比較的少ない労力で、プログラミング言語の基本的な文法の大部分を効率的に学ぶことができます。
        </p>
        <Link className="text-center block mt-8" href="lang/">
          <Button size="xl">始める</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
