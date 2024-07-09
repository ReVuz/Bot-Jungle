"use client"
import Image from "next/image";
import Loading from "./components/loading";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
import styled from "styled-components";


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
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
      </div>
      </Container>)}
      </main>
  );
}
