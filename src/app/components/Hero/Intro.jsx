import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen bg-black overflow-hidden" ref={container}>
      <motion.div
        style={{ y }}
        className="relative h-full flex justify-center items-center"
      >
        <video
          className="w-full h-[56vh] sm:h-[80vh] md:h-full object-cover"
          src="/img/Sequence 01_1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </div>
  );
}
