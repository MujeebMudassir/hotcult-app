import React, { useState, useEffect } from "react";
import "./css/AnimatedBranding.css";
import AnimatedArrow from "./AnimatedArrow";
import CurvedArrow from "./CurveArroe";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const AnimatedBranding = () => {
  const [dynamicText, setDynamicText] = useState("south");
  const [isFading, setIsFading] = useState(false);
  const [animate, setAnimate] = useState(false); // For triggering the animation
  const translations = ["south", "దక్షిణ", "தெற்கு", "തെക്ക്", "ದಕ್ಷಿಣ"];
  let index = 0;

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);

    // Change the dynamicText every 2 seconds
    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out animation
      setTimeout(() => {
        index = (index + 1) % translations.length; // Update text index
        setDynamicText(translations[index]);
        setIsFading(false); // Start fade-in animation
      }, 500); // Matches fade-out duration
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100px",
        fontSize: "84px",
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "0",
        marginTop: "-70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1 className="text-[80px] " style={{
           transition: "all 0.5s ease-in-out",
        }}>Branding for the {dynamicText}</h1>
      
      </div>
    </div>
  );
};

export default AnimatedBranding;
