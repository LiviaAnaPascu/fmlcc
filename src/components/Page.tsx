import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactNode, useCallback } from "react";

export interface PhotoMetadata {
  aspectRatio: string;
}

interface Props {
  alt?: string;
  category?: string;
  title: string;
  titleWidth: number;
  photos?: PhotoMetadata[];
  content? : ReactNode;
}

export function Page({ category, alt, title, titleWidth, photos, content}: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const isPresent = useIsPresent();

  const getContent = useCallback(() => {
    if(typeof content === "string") {
      return <p>{content.toString()}</p>
    }
    return content
  }, [content])

  return (
    <div>
      <h1 style={{ "--base-width": `${titleWidth}vw`, x: "-50%" } as any}>
        <ColumnHeader header={title}/>
      </h1>
      <motion.div className="progress" style={{ scaleX }} />
      <div className="back">
        <Link to="/" className="font-favorit">back to home</Link>
      </div>
      <div className="mb-[100px]">{
        getContent()
      }</div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "easeIn" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "easeOut" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      >
      </motion.div>
    </div>
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
  
    return <div className="flex items-baseline justify-center">{formattedHeader()}</div>;
  };