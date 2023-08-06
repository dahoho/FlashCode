import { Button } from "@/components/ui/button";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
      buttonWrapper: "flex gap-5 justify-center mt-8",
      cardBody: `card content text-center w-ful max-h-[400px] min-h-[400px]  overflow-auto flex flex-col ${
        isAnswer ? "" : "justify-center"
      }`,
      codeBlock: "text-left",
      codeString: "font-bold mt-8 text-2xl",
      answerString: "mt-8 font-bold text-md",
      isAnswerHidden: `question ${isAnswer ? "hidden" : "block"}`,
      isAnswerBlock: `question ${isAnswer ? "block" : "hidden"}`,
      problemNumber: "text-lg font-bold",
      sampleCodeTitle: "font-bold bg-sage-3 p-2 text-xs",
      completionMessage: "font-bold text-xl",
    },
  });

  const {
    buttonWrapper,
    codeBlock,
    codeString,
    answerString,
    cardBody,
    isAnswerHidden,
    isAnswerBlock,
    problemNumber,
    sampleCodeTitle,
  } = card();

  return (
    <div className="mt-6">
      {isCompletion ? (
        <div className={cardBody()}>
          <div>
            <p className="font-bold text-xl">お疲れ様でした 🎉</p>
            <div className="flex flex-col items-center gap-6 mt-10">
              <Button className="w-40 bg-teal-9" onClick={handleReset}>
                一枚目に戻る
              </Button>

              <Link href="/lang/javascript">
                <Button className="w-40 bg-teal-9">コース一覧</Button>
              </Link>
              <Link href="/lang/">
                <Button className="w-40 bg-teal-9">言語一覧</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={cardBody()}>
          <div>
            <p className={problemNumber()}>{`${currentCardNumber + 1}問目`}</p>
            <div className={isAnswerHidden()}>
              <p className={codeString()}>{code}</p>
              <Button className="mt-10 bg-teal-9" onClick={handleAnswer}>
                答えを見る
              </Button>
            </div>
            <div className={isAnswerBlock()}>
              <div className={answerString()}>
                <p>{answerTitle}</p>
                <p className={codeString()}>{code}</p>
              </div>
              <section className="mt-8">
                <h2 className={sampleCodeTitle()}>サンプルコード</h2>
                <div className={codeBlock()}>
                  <SyntaxHighlighter wrapLongLines language="javascript" style={monokaiSublime}>
                    {sampleCode}
                  </SyntaxHighlighter>
                </div>
              </section>
              <div className={buttonWrapper()}>
                {currentCardNumber !== 0 && (
                  <Button className="bg-teal-9" onClick={onPrevious}>
                    戻る
                  </Button>
                )}
                <Button
                  className="bg-teal-9"
                  onClick={
                    itemsLength - 1 !== currentCardNumber ? onNext : handleNextCardCompletion
                  }
                >
                  次へ
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
