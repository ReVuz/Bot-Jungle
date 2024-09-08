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
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className=" relative z-10 p-20 px-4 top-[-150px] mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <p className="w-[50vw] text-[2vw] self-end uppercase "></p>
       <p className="sm:text-[5vw] text-4xl leading-relaxed sm:pr-4 uppercase rotate-[270deg] md:rotate-0 md:translate-x-0 md:translate-y-0 -translate-x-[21vw] -translate-y-[16vw] ">
          Where innovation <br />
          and technology <br />
          come together
      </p>

      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={Background}
            fill
            alt="image"
            style={{ objectFit: window.innerWidth<640? "fill": "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
