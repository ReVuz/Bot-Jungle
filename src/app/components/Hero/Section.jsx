import Image from "next/image";
import Background from "../../../../public/img/bg-hero.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-[60vh] sm:h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 p-20 px-1 top-[-150px] mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <p className="w-[50vw] text-[2vw] self-end uppercase "></p>
        <p className="text-[5vw] uppercase ">
          Where innovation <br />
          and technology <br />
          come together
        </p>
      </div>
      <div className="fixed top-[-10vh] lg:h-[120vh] md:h-[120vh] h-[120vh] sm:h-[100vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={Background}
            // Remove `fill` attribute for smaller screens
            layout="fill" // Use 'fill' for consistent size on large screens
            alt="image"
            className="lg:bg-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
