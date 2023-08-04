import { Button } from "@/components/ui/button";
import { Code } from "@nextui-org/react";

import React, { useState } from "react";
import { tv } from "tailwind-variants";

type FlashCardProps = {
  answerTitle: string;
  code: string;
  sampleCode: string;
  onNext?: () => void;
  onPrevious?: () => void;
  currentCardNumber: number;
  itemsLength: number;
  isAnswer: boolean;
  handleAnswer: () => void;
};

export const FlashCard: React.FC<FlashCardProps> = ({
  answerTitle,
  code,
  sampleCode,
  onNext,
  onPrevious,
  currentCardNumber,
  itemsLength,
  isAnswer,
  handleAnswer,
}) => {
  const card = tv({
    slots: {
      wrapper: "card text-center h-full flex items-center justify-center",
      buttonWrapper: "flex gap-5 justify-center mt-10",
      codeBlock: "w-full text-left mt-4 p-4 whitespace-pre-wrap",
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
        <p>{`${currentCardNumber + 1}問目`}</p>
        <div className={isAnswerHidden()}>
          <p className={codeString()}>{code}</p>
          <Button className="mt-10" onClick={handleAnswer}>
            解説を見る
          </Button>
        </div>
        <div className={isAnswerBlock()}>
          <div className={answerString()}>
            <p>{answerTitle}</p>
            <p className={codeString()}>{code}</p>
          </div>
          <section className="mt-12">
            <h2 className="font-medium">サンプルコード</h2>
            <Code className={codeBlock()}>{sampleCode}</Code>
          </section>
          <div className={buttonWrapper()}>
            {currentCardNumber !== 0 && <Button onClick={onPrevious}>戻る</Button>}
            {itemsLength - 1 !== currentCardNumber && <Button onClick={onNext}>次へ</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};
