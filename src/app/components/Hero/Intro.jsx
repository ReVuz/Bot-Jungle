"use client";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  const [showArrow, setShowArrow] = useState(true);
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  // Smooth scrolling to the next section when the arrow is clicked
  const handleArrowClick = () => {
    // Calculate the target scroll position (a bit below the current view)
    const targetPosition = window.scrollY + window.innerHeight * 1.2;
    // Scroll to the target position smoothly
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen bg-black overflow-hidden relative" ref={container}>
      <motion.div
        style={{ y }}
        className="relative h-full flex justify-center items-center"
      >
        <video
          className="w-full h-[55vh] sm:h-[90vh] md:h-full object-cover"
          src="/img/Sequence 01_1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
      {showArrow && (
        <div
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center animate-bounce text-white cursor-pointer"
          onClick={handleArrowClick} // Add click handler
        >
          <p className="mb-2">Go Down</p>
          <ChevronDown size={32} />
        </div>
      )}
    </div>
  );
}
