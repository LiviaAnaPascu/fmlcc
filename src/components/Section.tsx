import classNames from "classnames";
import React, { ReactNode } from "react";

type SectionProps = {
  className?: string;
  header: string;
  content: string | ReactNode;
  id?: string;
};

const Section = ({ className, header, content, id }: SectionProps) => {
  const FormattedHeader = () => {
    const formattedHeader = () => {
      return (
        <>
          <div className="font-ornamentum text-[125.687px] leading-[125.687px] uppercase">
            {header.charAt(0)}
          </div>
          <div className="font-newEdge text-[66.54px] leading-[66.54px] uppercase">
            {header.slice(1)}
          </div>
        </>
      );
    };

    return <div className="flex items-baseline">{formattedHeader()}</div>;
  };

  const getContentColumns = () => {
    if (typeof content === "string") {
      const sentences = content.match(/[^.!?]+[.!?]+(?:\s|$)/g) || [];
      let leftSide: string[] = [];
      let rightSide: string[] = [];
      let leftLength = 0;
      let rightLength = 0;

      sentences.forEach((sentence) => {
        if (leftLength <= rightLength) {
          leftSide.push(sentence);
          leftLength += sentence.length;
        } else {
          rightSide.push(sentence);
          rightLength += sentence.length;
        }
      });

      return [leftSide, rightSide];
    }
    return [null, null];
  };
  const [firstColumn, secondColumn] = getContentColumns();
  return (
    <>
      {typeof content === "string" ? (
        <div
          className={classNames(
            className,
            "min-h-96 w-full flex flex-col md:flex-row text-center md:text-left"
          )}
          id={id}
        >
          <div className="md:w-1/2 pl-2 py-4 pr-4">
            <FormattedHeader />
            {firstColumn}
          </div>
          <div className="md:w-1/2 pl-4 py-4 pr-2 mt-[56px]">
            {secondColumn}
          </div>
        </div>
      ) : (
        <div id={id}>
          <FormattedHeader />
          {content}
        </div>
      )}
    </>
  );
};

export default Section;
