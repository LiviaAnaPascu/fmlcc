import { useState, useRef } from "react";
import { motion, useIsPresent } from "framer-motion";
import NavBar from "./navbar/NavBar";
import { Logo } from "../svgs/Logo";
import { ColumnHeader } from "./Section";
import screenshot from "../assets/images/screenshot.png"
export function Home() {
  const isPresent = useIsPresent();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Error attempting to play the video:", error);
      });
    }
  };

  const sections = ["about", "events", "strava", "instagram"];

  return (
    <>
      <NavBar logo={<Logo width={100} height={88} />} sections={sections} />
      <div className="video-container" style={{ position: "relative" }}>
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="play-button">
            <ColumnHeader header="Play"></ColumnHeader>
          </button>
        )}

        <video ref={videoRef} controls={isPlaying} style={{ width: "100%" }}>
          <source src={`${process.env.PUBLIC_URL}/vercelappvideo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && <><img src={screenshot} alt={"video preview"} className="top-[0px] h-[100vh] w-full"></img>
        <div className="cover"></div></>}

      </div>
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
