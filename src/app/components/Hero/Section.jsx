import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section() {
  const container = useRef();
  const leftContent = useRef();
  const rightContent = useRef();
  const leftText = useRef();
  const rightText = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop animations
      gsap.fromTo(
        [leftContent.current, rightContent.current],
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        [leftText.current, rightText.current],
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile animations
      gsap.fromTo(
        [
          leftContent.current,
          rightContent.current,
          leftText.current,
          rightText.current,
        ],
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="flex justify-center items-center relative min-h-screen bg-black overflow-hidden">
      <div
        ref={container}
        className="relative flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start text-white gap-8">
            {/* Left Content */}
            <motion.div
              ref={leftContent}
              className="bg-red-500 w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-start "
              style={{ y, scale: hoverLeft ? 1.02 : 1 }}
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
                What is BotJungle?
              </h2>
              <p
                ref={leftText}
                className="text-white leading-relaxed text-base md:text-lg"
              >
                BOTJUNGLE: Where Robotics Meets Competition! The most thrilling
                robotics event of the year is here with a bang! With exciting
                challenges, cutting-edge technology, and invaluable learning
                opportunities up for grabs, we&apos;re set to make history.
                Organized by IEEE RAS CUSAT SB, BOTJUNGLE is a multi-event
                robotic extravaganza that fuels innovation. Get ready for
                intense coding sessions, groundbreaking solutions, and yes —
                plenty of robot battles! Join us and leave your mark on the tech
                world!
              </p>
            </motion.div>

            {/* Right Content */}
            <motion.div
              ref={rightContent}
              className="bg-black w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-start text-white rounded-lg"
              style={{ y, scale: hoverRight ? 1.02 : 1 }}
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-red-500 font-bold mb-4">
                What is IEEE RAS?
              </h2>
              <p
                ref={rightText}
                className="text-white text-base md:text-lg leading-relaxed"
              >
                The IEEE Robotics and Automation Society Student Branch at
                Cochin University of Science and Technology (IEEE RAS CUSAT SB)
                is a dynamic hub for robotics enthusiasts. It serves as a
                platform for students to explore cutting-edge technologies,
                develop practical skills, and connect with industry leaders in
                robotics and automation. Through workshops, competitions, and
                collaborative projects, IEEE RAS CUSAT SB fosters innovation and
                prepares students for the challenges of the rapidly evolving
                robotics industry.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
