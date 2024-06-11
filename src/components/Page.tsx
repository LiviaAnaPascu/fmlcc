import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Image } from "./Image";
import { Link } from "react-router-dom";

export interface PhotoMetadata {
  aspectRatio: string;
}

interface Props {
  alt?: string;
  category?: string;
  title: string;
  titleWidth: number;
  photos?: PhotoMetadata[];
}

export function Page({ category, alt, title, titleWidth, photos }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const isPresent = useIsPresent();

  return (
    <article>
      <h1 style={{ "--base-width": `${titleWidth}vw`, x: "-50%" } as any}>
        <ColumnHeader header={title}/>
      </h1>
      <motion.div className="progress" style={{ scaleX }} />
      <footer className="back">
        <Link to="/" className="font-favorit">Back To Home</Link>
      </footer>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </article>
  );
}


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