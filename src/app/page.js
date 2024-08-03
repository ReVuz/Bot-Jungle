"use client"
import Loading from "./components/loading";
import HeroSection from "./components/HeroSection";
import { useState,useEffect } from "react";
import styled from "styled-components";
import { FloatingNav } from "./components/FloatingNav";
import { About } from "./components/About";
import { Steps } from "./components/Steps";
import { Quote } from "./components/Quote";
import Footer from "./components/Footer";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";
import Sponsor from "./components/Sponsor";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color : white;
  background-color: black; /* Set background to black */

  /* Create the grid pattern using background-image */
  background-image: 
    linear-gradient(to right, #333 1px, transparent 1px), /* Horizontal lines */
    linear-gradient(to bottom, #333 1px, transparent 1px); /* Vertical lines */
  background-size: 60px 60px; /* Control grid spacing */

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
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {isLoading ? (
        <Loading />
      ) : (<Container>
      <FloatingNav />
      <div className="container mt-24 mx-auto px-12 py-4">
       <HeroSection />
        <About />
        <Steps />
        <Sponsor />
        <Quote />
        <Footer/>
      </div>
      </Container>)}
      </main>
  );
}
