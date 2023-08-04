import { Button } from "@/components/ui/button";
import { Code } from "@nextui-org/react";

import React, { useState } from "react";
import { tv } from "tailwind-variants";

export const FlashCard: React.FC = () => {
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const handleAnswer = () => {
    setIsAnswer(prev => !prev);
  };

  const card = tv({
    slots: {
      wrapper: "card text-center h-full flex items-center justify-center",
      buttonWrapper: "flex gap-5 justify-center mt-10",
      codeBlock: "w-full text-left mt-4 p-4",
      codeString: "font-bold mt-8 text-4xl",
      answerString: "mt-8 font-bold text-xl",
      content: "content w-full",
      isAnswerHidden: `question ${isAnswer ? "hidden" : "block"}`,
      isAnswerBlock: `question ${isAnswer ? "block" : "hidden"}`,
    },
  });

  const {
    wrapper,
    buttonWrapper,
    codeBlock,
    codeString,
    answerString,
    content,
    isAnswerHidden,
    isAnswerBlock,
  } = card();

  return (
    <div className={wrapper()}>
      <div className={content()}>
        <div className={isAnswerHidden()}>
          <p className={codeString()}>str.length</p>
          <Button className="mt-10" onClick={handleAnswer}>
            解説を見る
          </Button>
        </div>
        <div className={isAnswerBlock()}>
          <div className={answerString()}>
            <p>文字数を取得する</p>
            <p className={codeString()}>str.length()</p>
          </div>
          <section className="mt-12">
            <h2 className="font-medium">サンプルコード</h2>
            <Code className={codeBlock()}>
              const str = "こんにちは";
              <br />
              str.length // 5
            </Code>
          </section>
          <div className={buttonWrapper()}>
            <Button onClick={handleAnswer}>戻る</Button>
            <Button onClick={handleAnswer}>次へ</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
