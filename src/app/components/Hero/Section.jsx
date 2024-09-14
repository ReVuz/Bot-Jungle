import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 py-12"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start text-white gap-8">
          {/* Left Content */}
          <motion.div
            className={`w-full lg:w-1/2 p-4 sm:p-6 rounded-lg transition-all duration-300 ease-in-out ${
              hoverLeft
                ? "bg-lime-500 transform scale-105"
                : "bg-green-700 bg-opacity-50 "
            }`}
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
            style={{ height: "400px" }} // Fixed height for left content
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What is BotJungle?
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              BOTJUNGLE: Where Robotics Meets Competition! The most thrilling
              robotics event of the year is here with a bang! With exciting
              challenges, cutting-edge technology, and invaluable learning
              opportunities up for grabs, we're set to make history. Organized
              by IEEE RAS CUSAT SB, BOTJUNGLE is a multi-event robotic
              extravaganza that fuels innovation. Get ready for intense coding
              sessions, groundbreaking solutions, and yes — plenty of robot
              battles! Join us and leave your mark on the tech world!
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className={`w-full lg:w-1/2 p-4 sm:p-6 rounded-lg transition-all duration-300 ease-in-out ${
              hoverRight
                ? "bg-red-600 transform scale-105"
                : "bg-red-700 bg-opacity-50 "
            }`}
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
            style={{ height: "400px" }} // Fixed height for right content
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What is IEEE RAS?
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              The IEEE Robotics and Automation Society Student Branch at Cochin
              University of Science and Technology (IEEE RAS CUSAT SB) is a
              dynamic hub for robotics enthusiasts. It serves as a platform for
              students to explore cutting-edge technologies, develop practical
              skills, and connect with industry leaders in robotics and
              automation. Through workshops, competitions, and collaborative
              projects, IEEE RAS CUSAT SB fosters innovation and prepares
              students for the challenges of the rapidly evolving robotics
              industry.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
