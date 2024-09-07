"use client";
import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import Loading from "./components/Loading/loading";
import { EventPage } from "./components/Events/EventPage";
import Footer from "./components/Footer/Footer";
import Sponsor from "./components/Sponsor/Sponsor";
import Description from "./components/Hero/Description";
import Intro from "./components/Hero/Intro";
import Section from "./components/Hero/Section";
import { Animate } from "./components/particles/particle";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] relative overflow-hidden">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="fixed inset-0 z-0">
            <Animate />
          </div>
          <div className="bg-[#121212] relative z-20">
            <Intro />
          </div>
          <Description />
          <Section />
          <div className="relative z-10">
            <EventPage />
            <Sponsor />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}
