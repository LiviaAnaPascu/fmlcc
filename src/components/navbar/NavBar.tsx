import React, { ReactNode, useMemo } from "react";
import Gallery from "./Gallery";

type NavBarProps = {
  logo: ReactNode;
  sections: string[];
};

const NavBar = ({ logo, sections }: NavBarProps) => {
  const navBarSections = useMemo(
    () => ({
      first: sections.slice(0, sections.length / 2),
      second: sections.slice(sections.length / 2),
    }),
    [sections]
  );

  return (
    <>
      <nav className="fixed top-0 flex w-full backdrop-blur-sm p-4 z-10 h-[162px] items-center">
        <div className="grow w-full flex justify-around">
          {navBarSections.first.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:rounded-full hover:border-2 hover:border-red-500 text-red-500 border-2 border-transparent px-2"
            >
              {section}
            </a>
          ))}
        </div>
        <div className="flex-none">{logo}</div>
        <div className="grow w-full flex justify-around">
          {navBarSections.second.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:rounded-full hover:border-2 hover:border-red-500 text-red-500 border-2 border-transparent px-2"
            >
              {section}
            </a>
          ))}
        </div>
      </nav>
      <Gallery className="" />
    </>
  );
};

export default NavBar;
