"use client";
import Loading from "./components/loading";
import HeroSection from "./components/HeroSection";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FloatingNav } from "./components/Navbar/FloatingNav";
import { About } from "./components/About";
import { Steps } from "./components/Steps";
import { Quote } from "./components/Quote";
import Footer from "./components/Footer";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";
import Sponsor from "./components/Sponsor";
import Spline from "@splinetool/react-spline"; // Import Spline library

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: transparent; /* Set background to transparent */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SplineContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 42); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {isLoading ? (
        // <Loading />
        <h1>Loading...</h1>
      ) : (
        // <Container>
        <div className="z-0 bg-black">
          <SplineContainer>
            <Spline scene="https://prod.spline.design/Y0RaBNGpPepinEO9/scene.splinecode" />
          </SplineContainer>
          <FloatingNav />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <About />
            <Steps />
            <Sponsor />
            <Quote />
            <Footer />
          </div>
        </div>
        // </Container>
      )}
    </main>
  );
}
