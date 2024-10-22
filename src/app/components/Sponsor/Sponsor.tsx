import React, { useEffect } from "react";
import { GlareCard } from "./glare-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
  useEffect(() => {
    // Animate the section heading and description on scroll
    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 80%", // start animation when the title is near the viewport
          end: "bottom 60%",
          toggleActions: "play none none reverse", // triggers when entering and reverse on leaving
        },
      }
    );

    gsap.fromTo(
      ".section-description",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-description",
          start: "top 80%", // start animation when the description is near the viewport
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate each sponsor card on scroll
    gsap.fromTo(
      ".glare-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".glare-card",
          start: "top 85%", // start animation when each card is near the viewport
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative z-20 py-8 lg:py-8 max-w-7xl mx-auto" id="sponsors">
      <div className="px-4 sm:px-8 mt-8 mb-16">
        <h4 className="section-title text-2xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Sponsors
        </h4>

        <p className="section-description text-xs sm:text-sm lg:text-base max-w-3xl my-4 mx-auto text-center font-normal text-neutral-300">
          Our sponsors are the backbone of the event. They help us to make the
          event successful.
        </p>
      </div>

      <div className="py-12 flex flex-col lg:flex-row items-center justify-center gap-8 mx-auto">
        <a href="https://ieeecusatsb.in/">
          <GlareCard className=" glare-card flex flex-col items-center justify-center">
            <img
              src="/img/ieee-logo.png"
              alt="IEEE"
              className="sponsor-logo h-20 sm:h-24 md:h-32 lg:h-42"
            />
          </GlareCard>
        </a>
        <a href="https://www.instagram.com/ieeerascusat?igsh=Y2p4YWRseXJ4ZmZ2">
          <GlareCard className="glare-card flex flex-col items-center justify-center">
            <img
              src="/img/IEEE-RAS.png"
              alt="IEEE RAS"
              className="sponsor-logo h-20 sm:h-24 md:h-32 lg:h-42 px-4 py-4"
            />
          </GlareCard>
        </a>
        <a href="http://kochi.ieeekerala.org/">
          <GlareCard className="glare-card flex flex-col items-center justify-center">
            <img
              src="/img/IEEE-kochi.png"
              alt="IEEE Kochi Subsection"
              className="sponsor-logo h-20 sm:h-24 md:h-32 lg:h-42 px-4 py-4"
            />
          </GlareCard>
        </a>
        <a href="https://www.linkedin.com/company/state-bank-of-india/">
          <GlareCard className="glare-card flex flex-col items-center justify-center">
            <img
              src="/img/sbi-log.png"
              alt="Alstom"
              className="sponsor-logo h-20 sm:h-24 md:h-32 lg:h-42"
            />
          </GlareCard>
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
