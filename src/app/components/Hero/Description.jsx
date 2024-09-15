import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const generateGibberish = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};

const colors = [
  "#FF0000", // Red
  "#0000FF", // Blue
];

const getRandomColor = () => {
  const nonWhiteColors = colors.filter((color) => color !== "#FFFFFF");
  return nonWhiteColors[Math.floor(Math.random() * nonWhiteColors.length)];
};

export default function Description() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const finalWords = [
      "BOT",
      "JUNGLE",
      "Powered",
      "by",
      "IEEE",
      "RAS",
      "CUSAT",
    ];
    const gibberishWords = finalWords.map((word) =>
      generateGibberish(word.length)
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "center center",
        scrub: 4,
        onEnter: () => {
          controls.start("visible");
          tl.play();
        },
        onLeave: () => tl.pause(),
        onEnterBack: () => tl.play(),
        onLeaveBack: () => {
          controls.start("hidden");
          tl.pause();
        },
      },
    });

    tl.set(titleRef.current, { text: "" });

    // Animate gibberish words with random colors
    gibberishWords.forEach((word, index) => {
      tl.to(titleRef.current, {
        duration: 0.5,
        text: (_, target) => {
          const currentText = target.textContent.split(" ");
          currentText[
            index
          ] = `<span style="color: ${getRandomColor()}">${word}</span>`;
          return currentText.join(" ");
        },
        ease: "power2.out",
      });
    });

    // Animate final words, keeping them white
    finalWords.forEach((word, index) => {
      tl.to(titleRef.current, {
        duration: 0.4,
        text: (_, target) => {
          const currentText = target.textContent.split(" ");
          currentText[index] = `<span style="color: #FFFFFF">${word}</span>`;
          return currentText.join(" ");
        },
        ease: "power2.out",
      });
    });

    // Particle effect animation
    gsap.to(".particle", {
      y: "random(-100, 100)",
      x: "random(-100, 100)",
      opacity: 0,
      scale: "random(0.5, 2)",
      duration: "random(1, 3)",
      stagger: 0.02,
      repeat: -1,
      repeatRefresh: true,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex justify-center items-center relative h-screen md:h-[120vh] lg:h-[140vh] bg-black overflow-hidden">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative text-4xl sm:text-5xl md:text-6xl lg:text-[7.5vw] px-4 uppercase text-center max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] leading-tight md:leading-none z-10"
      >
        <h1
          ref={titleRef}
          className="font-extrabold"
          dangerouslySetInnerHTML={{ __html: "" }}
        ></h1>
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.span
            key={index}
            className="particle absolute w-1 h-1 bg-white rounded-full"
            variants={particleVariants}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 opacity-50"></div>
    </div>
  );
}
