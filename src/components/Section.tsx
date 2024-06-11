import classNames from "classnames";
import React, { ReactNode, useRef } from "react";

type SectionProps = {
  className?: string;
  header: string;
  content: string | ReactNode;
  id?: string;
  textAlign?: "left" | "right";
  imageSrc: string;
};

const getContentColumns = (content: string | ReactNode) => {
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

const Section = ({
  className,
  header,
  content,
  id,
  textAlign,
  imageSrc,
}: SectionProps) => {
  //const [scrollY, setScrollY] = useState(0);
  const columnRef = useRef<HTMLDivElement>(null);
  const topColumnRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [firstColumn, secondColumn] = getContentColumns(content);

  return (
    <>
      {typeof content === "string" ? (
        <div
          className={classNames(
            className,
            "w-full max-w-[1728px] flex flex-col gap-[75px] min-h-[100vh]"
          )}
          id={id}
        >
          <div className="flex justify-center">
            <div ref={topColumnRef} className="w-[750px]">
              <ColumnHeader header={header} />
              <div className="text-[18px] font-light font-favorit">
                {firstColumn}
              </div>
            </div>
          </div>
          <div className={classNames("flex justify-around gap-[27px]")}>
            <div
              ref={columnRef}
              className={classNames(
                "w-[780px]",
                textAlign === "right" ? "order-last" : undefined
              )}
            >
              <div className="text-[18px] font-light font-favorit">
                {secondColumn}
              </div>
            </div>
            <div className="w-[670px]">
              <div
                ref={imageRef}
                //className="absolute transition-transform duration-250 ease-in-out"
                // style={{ top: "unset", left: "0px" }}
              >
                <img
                  src={imageSrc}
                  alt="Section illustration"
                  className="w-[670px]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={classNames(className, "w-full min-h-[100vh]")} id={id}>
          <ColumnHeader header={header} />
          {content}
        </div>
      )}
    </>
  );
};

type ColumnHeaderProps = {
  header: string;
};
const ColumnHeader = ({ header }: ColumnHeaderProps) => {
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

export default Section;
