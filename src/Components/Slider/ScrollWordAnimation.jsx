import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollWordAnimation = ({ word }) => {
  const wordRef = useRef(null);

  useEffect(() => {
    // const letters = wordRef.current.querySelectorAll(".letter");
    const letters = Array.from(wordRef.current.querySelectorAll(".letter"));

    // Shuffle letters randomly for stagger
    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);

    gsap.fromTo(
      // letters,
      shuffledLetters,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        // stagger: 0.5,
        stagger: {
          amount: 0.8, // Total duration for stagger
          from: "random", // Animate in random order
        },
        duration: 0.5,
        ease: "power3.out",
        duration: 0.9,
        ease: "back.out",
        scrollTrigger: {
          trigger: wordRef.current,
          start: "top 70%", // Start animation when 80% of the viewport reaches the word
          end: "top 0%", // End animation when the word reaches 20% of the viewport
          scrub: true, // Smooth animation during scroll
          // pin: true,
        },
      }
    );

    return () => ScrollTrigger.killAll(); // Clean up ScrollTriggers
  }, []);

  return (
    <div style={{position:"sticky",top:0,zIndex:999}}> {/* Add enough scrollable space */}
      <div
        ref={wordRef}
        style={{
          display: "flex",
          justifyContent: "center",
          // fontSize: "3rem",
          // fontWeight: "bold",
          fontSize: "210px",
          color: "#000",
          lineHeight: "0.7",
          textAlign: "center",
        }}
      >
        {word.split("").map((letter, index) => (
          <span key={index} className="letter" style={{ margin: "0 5px" }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollWordAnimation;
