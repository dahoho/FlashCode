"use client";

import { Container } from "@/components/organisms/Container";
import { FlashCard } from "@/components/organisms/FlashCard/FlashCard";
import { useCardNavigation } from "@/hooks/useCardNavigation";

import { Progress } from "@nextui-org/react";
import { useState } from "react";

const COURSE_ITEMS = [
  {
    answerTitle: "文字数を取得する",
    code: "str.length()",
    sampleCode: `const str = "こんにちは"; str.length; // 5`,
  },
  {
    answerTitle: "文字数を繰り返す",
    code: "str.repeat()",
    sampleCode: `const str = "まわる"; str.repeat(2);// まわるまわる`,
  },
  {
    answerTitle: "文字列を大文字に変換する",
    code: "str.toUpperCase()",
    sampleCode: `const str = "apple"; str.toUpperCase();// APPLE`,
  },
];

const String = () => {
  const [progressValue, setProgressValue] = useState<number>(0);
  const itemsLength = COURSE_ITEMS.length;
  const { currentCardNumber, handleNextCard, handlePreviousCard, isAnswer, handleAnswer } =
    useCardNavigation(COURSE_ITEMS, itemsLength, setProgressValue);

  console.log(progressValue);

  return (
    <Container>
      <FlashCard
        currentCardNumber={currentCardNumber}
        answerTitle={COURSE_ITEMS[currentCardNumber].answerTitle}
        code={COURSE_ITEMS[currentCardNumber].code}
        sampleCode={COURSE_ITEMS[currentCardNumber].sampleCode}
        onNext={handleNextCard}
        onPrevious={handlePreviousCard}
        itemsLength={itemsLength}
        isAnswer={isAnswer}
        handleAnswer={handleAnswer}
      />
      <Progress className="mt-4" aria-label="Loading..." size="sm" value={progressValue} />
    </Container>
  );
};

export default String;
