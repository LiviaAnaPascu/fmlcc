import classNames from "classnames";
import React, { useEffect, useRef } from "react";

import image1 from "../../assets/images/img1.jpg";
import image2 from "../../assets/images/img2.jpg";
import image3 from "../../assets/images/img3.jpg";
import image4 from "../../assets/images/img4.jpg";
import image5 from "../../assets/images/img5.jpg";
import image6 from "../../assets/images/img6.jpg";
import image7 from "../../assets/images/img7.jpg";

type GalleryProps = {
  className?: string;
};

const images = [
  { src: image1, aspectRatio: 1.5, size: 500, left: -50, bottom: 0 },
  { src: image2, aspectRatio: 1.2, size: 375, left: 20, bottom: -150 },
  { src: image3, aspectRatio: 1.2, size: 600, left: -80, bottom: 0 },
  { src: image4, aspectRatio: 1.8, size: 1000, left: -10, bottom: -100 },
  { src: image5, aspectRatio: 1.3, size: 500, left: 80, bottom: 0 },
  { src: image6, aspectRatio: 1.6, size: 440, left: 50, bottom: -120 },
  { src: image7, aspectRatio: 1.6, size: 600, left: 50, bottom: 0 },
];

const Gallery = ({ className }: GalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const placeholdersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const placeholders = Array.from(
      container.querySelectorAll<HTMLDivElement>(".placeholder")
    );
    placeholdersRef.current = placeholders;
    const containerCenter = container.offsetWidth / 2;

    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      placeholders.forEach((placeholder) => {
        const placeholderCenter =
          placeholder.offsetLeft + placeholder.offsetWidth / 3 - 20;
        const distanceFromCenter = placeholderCenter - containerCenter;
        const moveTowardsCenter = -distanceFromCenter * scrollFraction;

        placeholder.style.transform = `translateX(${moveTowardsCenter}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={classNames(
        className,
        "h-[100vh] w-full bg-black flex items-center justify-between"
      )}
      id="home"
    >
      {images.map((image, index) => {
        const width = image.size;
        const height = width / image.aspectRatio;
        const { left, bottom } = image;
        return (
          <div
            key={index}
            className="placeholder relative"
            style={{ width, height, left, bottom }}
          >
            <img
              src={image.src}
              alt={`Gallery item ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
