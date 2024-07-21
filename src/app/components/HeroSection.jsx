"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { AnimatedModalDemo } from "./AnimatedModel";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"> */}
              Hello,
            {/* </span> */}
            <br></br>
            <TypeAnimation
              sequence={[
                "BOT JUNGLE",
                1000,
                "POWERED BY",
                1000,
                "IEEE CUSAT",
                1000
                // "UI/UX Designer",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            
              <AnimatedModalDemo />
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[500px] relative">
            {/* <Image
              src="/img/home-img.png"
              alt="Robot holding peace sign"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            /> */}
            <Spline className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2" scene="https://prod.spline.design/qY5v4aeB1NZCTv5G/scene.splinecode"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;