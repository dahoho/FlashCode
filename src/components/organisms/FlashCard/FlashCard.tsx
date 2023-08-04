import { Button } from "@/components/ui/button";
import { Code } from "@nextui-org/react";

import React, { useState } from "react";

export const FlashCard: React.FC = () => {
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const handleAnswer = () => {
    setIsAnswer(prev => !prev);
  };

  return (
    <div className="card text-center h-full flex items-center justify-center">
      <div className="content w-full">
        <div className={`question ${isAnswer ? "hidden" : "block"}`}>
          <p className="font-bold mt-8 text-4xl">str.length</p>
          <Button className="mt-10" onClick={handleAnswer}>
            解説を見る
          </Button>
        </div>
        <div className={`answer ${isAnswer ? "block" : "hidden"}`}>
          <div className="mt-8 font-bold text-xl">
            <p>文字数を取得する</p>
            <p className="font-bold mt-8 text-4xl">str.length()</p>
          </div>
          <section className="mt-12">
            <h2 className="font-medium">サンプルコード</h2>
            <Code className="w-full text-left mt-4 p-4">
              const str = "こんにちは";
              <br />
              str.length // 5
            </Code>
          </section>
          <div className="flex gap-5 justify-center">
            <Button className="mt-10" onClick={handleAnswer}>
              戻る
            </Button>
            <Button className="mt-10" onClick={handleAnswer}>
              次へ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
