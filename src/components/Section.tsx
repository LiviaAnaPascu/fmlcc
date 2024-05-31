import classNames from "classnames";
import React, { ReactNode, useEffect, useRef, useState } from "react";

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
  const [scrollY, setScrollY] = useState(0);
  const columnRef = useRef<HTMLDivElement>(null);
  const topColumnRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [firstColumn, secondColumn] = getContentColumns(content);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (columnRef.current && imageRef.current && topColumnRef) {
      const columnRect = columnRef.current.getBoundingClientRect();
      const topColumnRect = columnRef.current.getBoundingClientRect();
      const image = imageRef.current;
      image.style.top = `${topColumnRect.bottom + 27}px`;

      if (textAlign === "left") {
        image.style.left = `${columnRect.right + 27}px`;
      } else {
        image.style.left = `${columnRect.left - image.offsetWidth - 10}px`;
      }
    }
  }, [textAlign]);

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
              <div className="text-[28px] font-light font-favorit">
                {firstColumn}
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "flex",
              textAlign === "left" ? "justify-start" : "justify-end"
            )}
          >
            <div
              ref={imageRef}
              className="absolute transform transition-transform duration-250 ease-in-out
              "
              style={{
                top: "unset",
                transform: `translateY(${scrollY * -0.3}px)`,
              }}
            >
              <img
                src={imageSrc}
                alt="Section illustration"
                className="w-[670px]"
              />
            </div>
            <div ref={columnRef} className="w-[780px]">
              <div className="text-[28px] font-light font-favorit">
                {secondColumn}
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
