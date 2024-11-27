import React, { useEffect, useRef } from "react";
import "./css/svg.css";
const Svg2 = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `50 ${length}`; // 10px segment followed by the rest
    pathRef.current.style.strokeDashoffset = length;
  }, []);

  return (
    <svg
      className="hidden md:block"
      viewBox="0 0 1920 454"
      fill="none"
      style={{ width: "100%", height: "100%" }} // Make SVG responsive
      //   xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-652 1H476.592C476.592 1 483.783 211.088 529.979 297.741C628.142 481.874 898.522 451.063 1565 451.063H1922.5"
        stroke={`#fff`}
        strokeWidth="5"
        fill="none"
        style={{ opacity: 0.2, filter: "blur(1px)" }}
      />
      <path
        ref={pathRef}
        className="animated-path"
        d="M-652 1H476.592C476.592 1 483.783 211.088 529.979 297.741C628.142 481.874 898.522 451.063 1565 451.063H1922.5"
        stroke={`#fff`}
        strokeWidth="8"
        // strokeLinecap="round"
        fill="none"
        filter="url(#shadow)"
      />
    </svg>
  );
};

export default Svg2;
