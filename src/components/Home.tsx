import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import { Logo } from "../svgs/Logo";

export function Home() {
  const isPresent = useIsPresent();

  const sections = ["home", "about", "strava", "events"];

  return (
    <>
    <NavBar logo={<Logo width={139} height={88} />} sections={sections} />
    
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
}
