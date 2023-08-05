import { Button } from "@/components/ui/button";
import { Code } from "@nextui-org/react";
import Link from "next/link";

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
  handleNextCardCompletion: () => void;
  isCompletion: boolean;
  handleReset: () => void;
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
  handleNextCardCompletion,
  isCompletion,
  handleReset,
}) => {
  const card = tv({
    slots: {
      wrapper: "card text-center h-full flex items-center justify-center",
      buttonWrapper: "flex gap-5 justify-center mt-10",
      codeBlock: "w-full text-left mt-4 p-4 whitespace-pre-wrap",
      codeString: "font-bold mt-8 text-3xl",
      answerString: "mt-14 font-bold text-xl",
      content: "content w-full",
      isAnswerHidden: `question ${isAnswer ? "hidden" : "block"}`,
      isAnswerBlock: `question ${isAnswer ? "block" : "hidden"}`,
      problemNumber: "text-2xl font-bold",
      sampleCodeTitle: "font-bold bg-black text-white p-2 text-xs",
      completionMessage: "font-bold text-xl",
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
    problemNumber,
    sampleCodeTitle,
  } = card();

  return (
    <div className={wrapper()}>
      {isCompletion ? (
        <div>
          <p className="font-bold text-xl">お疲れ様でした！</p>
          <div className="flex flex-col gap-4 mt-14">
            <Button className="w-40" onClick={handleReset}>
              一枚目に戻る
            </Button>

            <Link href="/lang/javascript">
              <Button className="w-40">コース一覧</Button>
            </Link>
            <Link href="/lang/">
              <Button className="w-40">言語一覧</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={content()}>
          <p className={problemNumber()}>{`${currentCardNumber + 1}問目`}</p>
          <div className={isAnswerHidden()}>
            <p className={codeString()}>{code}</p>
            <Button className="mt-10" onClick={handleAnswer}>
              答えを見る
            </Button>
          </div>
          <div className={isAnswerBlock()}>
            <div className={answerString()}>
              <p>{answerTitle}</p>
              <p className={codeString()}>{code}</p>
            </div>
            <section className="mt-12">
              <h2 className={sampleCodeTitle()}>サンプルコード</h2>
              <Code className={codeBlock()}>{sampleCode}</Code>
            </section>
            <div className={buttonWrapper()}>
              {currentCardNumber !== 0 && <Button onClick={onPrevious}>戻る</Button>}
              <Button
                onClick={itemsLength - 1 !== currentCardNumber ? onNext : handleNextCardCompletion}
              >
                次へ
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
