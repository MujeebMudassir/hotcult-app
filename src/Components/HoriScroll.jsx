import React, { useEffect, useRef, useState } from "react";

const HoriScroll = () => {
  const [positions, setPositions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const letters = "Meet HotCult".split("");

  useEffect(() => {
    const initialPositions = letters.map(() => ({
      top: Math.random() * 100, // Random vertical position
      left: Math.random() * 100, // Random horizontal position
    }));
    setPositions(initialPositions);

    const handleScroll = () => {
      if (!isVisible || !sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;
      const progress = Math.min(
        Math.max((scrollY - sectionTop) / sectionHeight, 0),
        1
      );

      const targetPositions = letters.map((_, index) => ({
        top: 99, // Center vertically
        left: 3 + index * 1.5, // Adjust horizontal spacing according to font size
      }));

      const updatedPositions = initialPositions.map((pos, index) => ({
        top: pos.top + (targetPositions[index].top - pos.top) * progress,
        left: pos.left + (targetPositions[index].left - pos.left) * progress,
      }));
      setPositions(updatedPositions);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="h-[100vh] relative overflow-hidden">
      {letters.map((letter, index) => (
        <div
          key={index}
          className="absolute text-white transition-all duration-500 ease-linear"
          style={{
            top: `${positions[index]?.top || 50}%`,
            left: `${positions[index]?.left || 50}%`,
            transform: "translate(-50%, -50%)",
            fontSize: `${150 - (positions[index]?.top || 50) * 1.3}px`, // Initial size 150px, scales down to around 20px
          }}
        >
          {letter}
        </div>
      ))}
    </section>
  );
};

export default HoriScroll;
