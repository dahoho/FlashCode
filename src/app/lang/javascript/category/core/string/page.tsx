import { Container } from "@/components/organisms/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const String = () => {
  return (
    <Container>
      <div className="px-5 relative h-full">
        <div className="card text-center position-center w-full h-full flex items-center justify-center">
          <div className="content">
            <div className="front">
              <p className="font-medium">文字列の両端の空白を削除する</p>
              <p className="font-bold mt-8 text-3xl">str.trim()</p>
              <Button className="mt-10">解答を見る</Button>
            </div>
            <div className="back">
              <p>文字数を取得する</p>
              <p className="font-bold mt-8 text-3xl">str.trim()</p>
              <section>
                <h2>サンプルコード</h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default String;
