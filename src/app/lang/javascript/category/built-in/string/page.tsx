"use client";

import { Container } from "@/components/organisms/Container";
import { FlashCard } from "@/components/organisms/FlashCard/FlashCard";
import { useCardNavigation } from "@/hooks/useCardNavigation";

import { Progress } from "@nextui-org/react";
import { useState } from "react";

const COURSE_ITEMS = [
  {
    answerTitle: "文字数の長さを取得する",
    code: "str.length()",
    sampleCode: `const str = "こんにちは"; str.length; // 5`,
  },
  {
    answerTitle: "文字列を大文字に変換する",
    code: "str.toUpperCase()",
    sampleCode: `const str = "apple"; str.toUpperCase(); // APPLE`,
  },
  {
    answerTitle: "文字列を小文字に変換する",
    code: "str.toLowerCase()",
    sampleCode: `const str = "APPLE"; str.toLowerCase(); // apple`,
  },
];

const String = () => {
  const [progressValue, setProgressValue] = useState<number>(0);
  const itemsLength = COURSE_ITEMS.length;
  const {
    currentCardNumber,
    handleNextCard,
    handlePreviousCard,
    isAnswer,
    handleAnswer,
    handleNextCardCompletion,
    isCompletion,
    handleReset,
  } = useCardNavigation(COURSE_ITEMS, itemsLength, setProgressValue);

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
        handleNextCardCompletion={handleNextCardCompletion}
        isCompletion={isCompletion}
        handleReset={handleReset}
      />
      <Progress className="mt-4" size="sm" value={progressValue} />
    </Container>
  );
};

export default String;
