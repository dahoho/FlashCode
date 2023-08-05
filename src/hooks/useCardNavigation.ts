import { Dispatch, SetStateAction, useState } from "react";

type CourseItemsProps = {
  answerTitle: string;
  code: string;
  sampleCode: string;
}[];

export const useCardNavigation = (
  items: CourseItemsProps,
  itemsLength: number,
  setProgressValue: Dispatch<SetStateAction<number>>
) => {
  const [currentCardNumber, setCurrentCardNumber] = useState<number>(0);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [isCompletion, setIsCompletion] = useState<boolean>(false);

  const handleAnswer = () => {
    setIsAnswer(prev => !prev);
  };

  const handleNextCard = () => {
    setCurrentCardNumber(prev => (prev + 1) % items.length);
    const newProgressValue = ((currentCardNumber + 1) / itemsLength) * 100;
    setProgressValue(newProgressValue);
    setIsAnswer(prev => !prev);
  };

  const handlePreviousCard = () => {
    setCurrentCardNumber(prev => (prev - 1 + items.length) % items.length);
    const newProgressValue = ((currentCardNumber - 1) / itemsLength) * 100;
    setProgressValue(newProgressValue);
    setIsAnswer(prev => !prev);
  };

  const handleNextCardCompletion = () => {
    setCurrentCardNumber(prev => (prev + 1) % items.length);
    const newProgressValue = ((currentCardNumber + 1) / itemsLength) * 100;
    setProgressValue(newProgressValue);
    setIsCompletion(prev => !prev);
  };

  const handleReset = () => {
    setProgressValue(0);
    setCurrentCardNumber(0);
    setIsCompletion(prev => !prev);
    setIsAnswer(prev => !prev);
  };

  return {
    currentCardNumber,
    handleNextCard,
    handlePreviousCard,
    isAnswer,
    handleAnswer,
    handleNextCardCompletion,
    isCompletion,
    handleReset,
  };
};
