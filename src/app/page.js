"use client";
import Loading from "./components/Loading/loading";
import Lenis from "lenis";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FloatingNav } from "./components/Navbar/FloatingNav";
import { About } from "./components/About/About";
import { EventPage } from "./components/Events/EventPage";
import { Quote } from "./components/Quote/Quote";
import Footer from "./components/Footer/Footer";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";
import Sponsor from "./components/Sponsor/Sponsor";
import Description from "./components/Hero/Description";
import Intro from "./components/Hero/Intro";
import Section from "./components/Hero/Section";
import { Animate } from "./components/particles/particle";
import FAQ from "./components/FAQ/FAQ";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  color: white;
  background-color: transparent; /* Set background to transparent */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust this time as needed

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
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Animate />
          <div className="z-0 bg-black">
            <div className="bg-[#121212] relative z-20">
              <Intro />
            </div>
            <Description />
            <Section />
            <div className="px-5 z-20">
              {/* <FloatingNav /> */}
              {/* <Index /> */}
              <EventPage />
              {/* <ExpandableCardDemo /> */}
              <Sponsor />
              {/* <About /> */}
              {/* <Quote /> */}
              <FAQ />
              <Footer />
            </div>
          </div>
        </Container>
      )}
    </main>
  );
}
