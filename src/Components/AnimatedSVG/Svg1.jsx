import React, { useEffect, useRef } from 'react';
import "./css/svg.css";
const Svg1 = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `50 ${length}`; // 10px segment followed by the rest
    pathRef.current.style.strokeDashoffset = length;
  }, []);

  return (
    <svg
    className='hidden md:block'
      viewBox="0 0 1920 454"
      fill="none"
      style={{ width: "100%", height: "100%", }} // Make SVG responsive
    //   xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2067.5 453H938.908C938.908 453 931.717 242.912 885.521 156.259C787.358 -27.8739 516.978 2.93721 -149.5 2.93722H-507"
        stroke={`#fff`}
        strokeWidth="5"
        fill="none"
        style={{opacity:0.2,filter: "blur(1px)"}}
      />
      <path
        ref={pathRef}
        className="animated-path"
        d="M2067.5 453H938.908C938.908 453 931.717 242.912 885.521 156.259C787.358 -27.8739 516.978 2.93721 -149.5 2.93722H-507"
        stroke={`#fff`}
        strokeWidth="8"
        // strokeLinecap="round"
        fill="none"
        filter="url(#shadow)"
      />
    </svg>
  );
};

export default Svg1;