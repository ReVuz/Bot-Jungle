import React, { useEffect } from 'react';
import { GlareCard } from './glare-card';
import { gsap } from 'gsap';

const Sponsor = () => {
  useEffect(() => {
    // Animate the section heading and description
    gsap.fromTo(
      '.section-title',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }
    );

    gsap.fromTo(
      '.section-description',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
      }
    );

    // Animate each sponsor card
    gsap.fromTo(
      '.glare-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
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
          Our sponsors are the backbone of the event. They help us to make the event successful.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 lg:ml-12 px-8">
        <GlareCard className="glare-card flex flex-col items-center justify-center">
          <img src="/img/ieee-logo.png" alt="IEEE" className="sponsor-logo h-20 sm:h-24 md:h-32 lg:h-42" />
        </GlareCard>
        <GlareCard className="glare-card flex flex-col items-center justify-center">
          <img src="/img/inker-logo.webp" alt="Inker Robotics" className="sponsor-logo h-20 sm:h-24 md:h-32 lg:h-42 px-4 py-4" />
        </GlareCard>
        <GlareCard className="glare-card flex flex-col items-center justify-center">
          <img src="/img/sbi-log.png" alt="Alstom" className="sponsor-logo h-20 sm:h-24 md:h-32 lg:h-42" />
        </GlareCard>
      </div>
    </div>
  );
};

export default Sponsor;