import React, { useEffect, useRef, forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ideathon from "../../../../public/img/ideathon.jpg";
import botjungle from "../../../../public/img/botjungle.png";
import robowar from "../../../../public/img/robowar.png";
import "./Style.css";

gsap.registerPlugin(ScrollTrigger);

export function EventPage() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out", // Smoother ease for better small screen performance
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      cards,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out", // Smoother ease for better small screen performance
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const handleNavigation = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="w-full py-12" id="events" ref={sectionRef}>
      <h1 className="text-center text-4xl font-bold py-8" ref={titleRef}>
        <span className="text-white">Events</span>
      </h1>
      <div className="py-12 flex flex-col lg:flex-row items-center justify-center w-full gap-8 mx-auto px-8">
        <Card
          ref={(el) => {
            cardsRef.current[0] = el;
          }}
          title="Ideathon"
          // icon={<AceternityIcon order="Bot Jungle" />}
          description="A platform where ideas come to life through robotics competitions. Experience thrilling challenges."
          fullDescription={`
  Ideathon is more than just a robotics competition; it's a crucible for innovation where participants bring their ideas to the forefront. This event features a range of exciting challenges designed to test skills in robotics engineering and control.    `}
          onNavigate={() => handleNavigation("https://bit.ly/4778s7K")}
          backgroundImage={ideathon.src}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-red-600"
          />
        </Card>

        <Card
          ref={(el) => {
            cardsRef.current[1] = el;
          }}
          title="RoboWar"
          // icon={<AceternityIcon order="RoboWar" />}
          description="An electrifying competition where pre-built robots from various colleges engage in strategic combat, testing their durability, agility, and offensive capabilities."
          fullDescription={`
      RoboWar is an intense combat robotics competition where pre-built robots from different colleges clash in a battle of engineering prowess.

      Key highlights include:
      1. Strategic Combat: Robots engage in battles that require both offensive and defensive strategies to outmaneuver and overpower opponents.
      2. Durability Tests: Robots are subjected to rigorous challenges to test their robustness and endurance under pressure.
      3. Agility Challenges: Competitions that focus on the bots' speed and maneuverability, crucial for gaining an edge in combat scenarios.

      The event aims to foster innovation and teamwork among participants, encouraging them to push the boundaries of robotics technology.
    `}
          onNavigate={() => handleNavigation("https://lu.ma/kqwathwh")}
          backgroundImage={robowar.src}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-lime-600"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-white" />
        </Card>

        <Card
          ref={(el) => {
            cardsRef.current[2] = el;
          }}
          title="Bot Jungle"
          // icon={<AceternityIcon order="RoboSoccer" />}
          description="A robotics competition where participants build and compete with their own bots. Features gamemodes with points system and a final showdown"
          fullDescription={`
      Bot Jungle is a thrilling robotics competition designed to challenge participants in various aspects of robotics engineering and control. The event includes multiple game modes to test different skills and strategies:
      
      Final Showdown: A culmination of the event where the best-performing bots face off in a series of challenges that test their overall capabilities.

      Each game mode is designed to push the limits of the bots' design and the participants' control skills, making Bot Jungle an exciting and educational experience.
    `}
          onNavigate={() => handleNavigation("https://lu.ma/kqwathwh")}
          backgroundImage={botjungle.src}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
}

const Card = forwardRef(
  (
    {
      title,
      children,
      description,
      fullDescription,
      onNavigate,
      backgroundImage,
    }: {
      title: string;
      children?: React.ReactNode;
      description: string;
      fullDescription: string;
      onNavigate?: () => void;
      backgroundImage: string;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const [hovered, setHovered] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    return (
      <>
        <div
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="border border-white group/canvas-card card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[20rem] cursor-pointer"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        >
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full w-full absolute inset-0"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative z-20 w-full h-full flex flex-col justify-between">
            <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
              {/* {icon} */}
            </div>
            <div>
              <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                {title}
              </h2>
              <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                {description}
              </h2>
            </div>
            <div className="flex justify-between items-end mt-4">
              <button
                type="button"
                className="btn px-4 py-2 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onNavigate) onNavigate();
                }}
              >
                <strong>Register</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isModalOpen && (
            <Modal onClose={toggleModal}>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="whitespace-pre-line">{fullDescription}</p>
            </Modal>
          )}
        </AnimatePresence>
      </>
    );
  }
);

Card.displayName = "Card";

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="inline-flex h-12 animate-shimmer items-center justify-center border border-white px-6 font-medium text-white-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {order}
    </button>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Modal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black border-white bg-opacity-50"
      onClick={onClose}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-black border-[1px] px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-12  lg:pt-6 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-4 text-white">
          X
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default EventPage;
