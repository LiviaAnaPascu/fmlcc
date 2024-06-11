import React, { ReactNode, useMemo } from "react";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

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
      <nav className="fixed top-0 flex w-full backdrop-blur-sm p-4 z-10 h-[100px] items-center">
        <div className="grow w-full flex justify-around">
          {navBarSections.first.map((section) => (
            <Link to={`/${section}`} className={"hover:rounded-full hover:border-2 hover:border-red-500 text-red-500 border-2 border-transparent px-2"}>{section}</Link>
          ))}
        </div>
        <div className="flex-none w-[100px]">{logo}</div>
        <div className="grow w-full flex justify-around">
          {navBarSections.second.map((section) => (
           <Link to={`/${section}`} className={"hover:rounded-full hover:border-2 hover:border-red-500 text-red-500 border-2 border-transparent px-2"}>{section}</Link>
          ))}
        </div>
      </nav>
      <Gallery className="" />
    </>
  );
};

export default NavBar;
