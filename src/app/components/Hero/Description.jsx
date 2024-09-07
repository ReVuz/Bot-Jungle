import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Background from "../../../../public/img/IMG-20240826-WA0016.png";

export default function Description() {
  return (
    <div className="flex justify-center my-40 bg-black">
      <div className="top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div className="relative w-full h-full">
          <Image
            src={Background}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <p className="text-[7.5vw] py-72 uppercase text-center max-w-[50vw] leading-none z-10">
        BOT JUNGLE Powered by IEEE CUSAT
      </p>
    </div>
  );
}
