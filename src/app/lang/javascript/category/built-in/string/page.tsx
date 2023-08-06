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
  {
    answerTitle: "開始・終了位置の間、または文字列の最後までの部分集合を返します。",
    code: "str.substring()",
    sampleCode: `const str = "programming"; str.substring(1,3); // ro
const str = "programming"; str.substring(2);
// ogramming`,
  },
];

const String: React.FC = () => {
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
      <div className="mt-4">
        <Progress
          classNames={{
            track: "bg-sage-3",
            indicator: "bg-teal-9",
          }}
          size="sm"
          value={progressValue}
        />
      </div>
    </Container>
  );
};

export default String;
