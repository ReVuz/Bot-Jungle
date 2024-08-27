"use client";
import Loading from "./components/Loading/loading";
import Lenis from "lenis";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FloatingNav } from "./components/Navbar/FloatingNav";
import { About } from "./components/About/About";
import { Steps } from "./components/Events/Steps";
import { Quote } from "./components/Quote/Quote";
import Footer from "./components/Footer/Footer";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";
import Sponsor from "./components/Sponsor/Sponsor";
import Index from "./components/Hero/index";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4200); // Adjust this time as needed

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
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className="z-0 bg-black">
            <FloatingNav />
            <Index />
            <Steps />
            {/* <ExpandableCardDemo /> */}
            <Sponsor />
            <About />
            <Quote />
            <Footer />
          </div>
        </Container>
      )}
    </main>
  );
}
