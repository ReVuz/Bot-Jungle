"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import "./styles.css";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Events", link: "#events" },
];

export const FloatingNav = () => {
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((current) => {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    });
  }, [scrollYProgress]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex max-w-fit md:min-w-[100vw] lg:min-w-fit fixed z-[300] top-8 inset-x-0 mx-auto px-6 py-2 rounded-none border border-green/.3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "28px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-black hover:text-neutral-400"
          >
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <Link
          href={
            "https://docs.google.com/forms/d/1cJpkWmfHd3ZNyJ0WiWnMa_OU1FyOvjMYG-OinB816Aw/viewform?edit_requested=true"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn">
            <strong>Register</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
