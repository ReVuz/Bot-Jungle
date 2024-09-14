import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="text-2xl text-white">{isOpen ? "-" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const faqsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const faqs = faqsRef.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      faqs,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
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

  const faqData = [
    {
      question: "Where is the event taking place?",
      answer: "The event is taking place on the Software Block of SOE CUSAT.",
    },
    {
      question: "Can non-cusatians participate in this event?",
      answer: "Yes, anyone can join this event.",
    },
    {
      question: "Do you need to be an IEEE member to take part in this event?",
      answer: "No, anyone is allowed to join this event.",
    },
    {
      question: "Is access to this event free?",
      answer: "Yes, anyone can access this event for free",
    },
  ];

  return (
    <div className="w-full py-12 bg-black" id="faq" ref={sectionRef}>
      <h1
        className="text-center text-4xl font-bold py-8 text-white"
        ref={titleRef}
      >
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto px-4">
        {faqData.map((faq, index) => (
          <div key={index} ref={(el) => (faqsRef.current[index] = el)}>
            <FAQItem question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
