import React, { useEffect, useRef, useState } from "react";

const LoculScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY) {
            setScrollPosition((prev) => prev + 1);
          } else if (currentScrollY < lastScrollY) {
            setScrollPosition((prev) => prev - 1);
          }
          lastScrollY = currentScrollY;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="text-[190px]  text-[#191d22] w-full leading-[1] overflow-hidden sticky top-0"
      style={{ height: "300px" }} // Adjust height as needed
    >
      <p
        className={`text-[#373f4c] transition-all duration-500 ease-linear`}
        style={{
          position: "absolute",
          right: `${scrollPosition * 0.7}%`, // Adjust movement speed by changing the multiplier
          bottom: "-40%",
          transform: "translate(100%, -50%)",
          whiteSpace: "nowrap",
        }}
      >
        LOCUL is HOT
      </p>
    </div>
  );
};

export default LoculScroll;
