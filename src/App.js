import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AnimatedBranding from "./Components/AnimatedBranding";
import img from "./Images/tribecca-2022.webp";
import Footer from "./Components/Footer";
import Svg1 from "./Components/AnimatedSVG/Svg1";
import Svg2 from "./Components/AnimatedSVG/Svg2";
import HyderabadSection from "./Components/HyderabadSection";
import LastSection from "./Components/LastSection";
import Section2 from "./Components/section2/Section2";
import HoriScroll from "./Components/HoriScroll";
import LoculScroll from "./Components/LoculScroll";
import Banner from "./Components/Banner";

const App = () => {
  return (
    <div
      style={{ background: "#000", color: "#fff", scrollBehavior: "smooth" }}
    >
      <section style={{ width: "100vw", height: "100vh" }}>
        <center>
          <img
            src="https://mujeebmudassir.github.io/hotcult/assets/LogoWhite-DwqR5CQs.png"
            alt="Hotcult Logo"
            style={{ width: "200px" }}
          />
        </center>

        <AnimatedBranding />
      </section>
      <HoriScroll />
      <Section2 />
      <HyderabadSection />
     
      <LastSection />
    </div>
  );
};

export default App;
