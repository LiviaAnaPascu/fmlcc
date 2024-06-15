import classNames from "classnames";
import React, { ReactNode } from "react";

type SectionProps = {
  className?: string;
  header: string;
  content: string | ReactNode;
  id?: string;
};

const Section = ({
  className,
  header,
  content,
  id,
}: SectionProps) => {
  return (
    <> <div
          className={classNames(
            className,
            "w-full max-w-[1728px] flex flex-col gap-[75px] min-h-[100vh]"
          )}
          id={id}
        >
        <div className={classNames(className, "w-full min-h-[100vh]")} id={id}>
          <ColumnHeader header={header} />
          {content}
        </div>
        </div>
    
    </>
  );
};

type ColumnHeaderProps = {
  header: string;
};
export const ColumnHeader = ({ header }: ColumnHeaderProps) => {
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
