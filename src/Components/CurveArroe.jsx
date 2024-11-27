import React from "react";

const CurvedArrow = () => {
  return (
    <svg
      width="200"
      height="150"
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curved tail */}
      {/* <path
        d="M80,300 C50,200 200,200 165,70"
        stroke="white"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      /> */}
      {/* Arrowhead */}
      <polygon
        points="165,30 195,70 135,70"
        fill="white"
      />
    </svg>
  );
};

export default CurvedArrow;
