"use client";

import { Container } from "@/components/organisms/Container";
import { FlashCard } from "@/components/organisms/FlashCard/FlashCard";
import { JAVASCRIPT_STRING_ITEMS } from "@/data";
import { useCardNavigation } from "@/hooks/useCardNavigation";

import { Progress } from "@nextui-org/react";
import { useState } from "react";

const String: React.FC = () => {
  const [progressValue, setProgressValue] = useState<number>(0);
  const itemsLength = JAVASCRIPT_STRING_ITEMS.length;
  const {
    currentCardNumber,
    handleNextCard,
    handlePreviousCard,
    isAnswer,
    handleAnswer,
    handleNextCardCompletion,
    isCompletion,
    handleReset,
  } = useCardNavigation(JAVASCRIPT_STRING_ITEMS, itemsLength, setProgressValue);

  return (
    <Container>
      <FlashCard
        currentCardNumber={currentCardNumber}
        questionTitle={JAVASCRIPT_STRING_ITEMS[currentCardNumber].questionTitle}
        code={JAVASCRIPT_STRING_ITEMS[currentCardNumber].code}
        sampleCode={JAVASCRIPT_STRING_ITEMS[currentCardNumber].sampleCode}
        onNext={handleNextCard}
        onPrevious={handlePreviousCard}
        itemsLength={itemsLength}
        isAnswer={isAnswer}
        handleAnswer={handleAnswer}
        handleNextCardCompletion={handleNextCardCompletion}
        isCompletion={isCompletion}
        handleReset={handleReset}
      />
      <div className="mt-4 flex items-center gap-2">
        <p className="flex-shrink-0 font-bold text-sm">{`${
          currentCardNumber + 1
        } / ${itemsLength}問`}</p>
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
