import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSwiper = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const slides = gsap.utils.toArray(".swiper-slide");

    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1), // Move each slide horizontally
      ease: "none",
      scrollTrigger: {
        trigger: swiperRef.current,
        start: "top 15%",
        end: `+=${slides.length * window.innerHeight}`, // Total scroll distance
        scrub: true, // Sync animation with scroll
        pin: true, // Pin the container during scrolling
        snap: {
          snapTo: 1 / (slides.length - 1), // Snap to each slide
          duration: 0.5, // Duration of snap
          ease: "power1.inOut", // Easing for snap animation
        },
      },
    });
  }, []);

  return (
    <div
      ref={swiperRef}
      style={{
        height: "70vh",
        display: "flex", // Align slides horizontally
        overflow: "hidden",
        gap:"10%",
        paddingLeft:"10%",
        paddingRight:"15%",
        position: "relative",
      }}
      >
      {images.map((image, index) => (
        <div
        key={index}
        className="swiper-slide"
        style={{
          minWidth: "90%", // Each slide takes full viewport width
          height: "70vh", // Full viewport height
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          borderRadius:"20px",
          overflow:"hidden"
          
          }}
        >
          <div
            style={{
              position: "absolute",
              background: "rgba(0, 0, 0, 0.4)",
              color: "#fff",
              padding: "20px",
              width: "100%",
              height: "100%",
            }}
          >
            <div style={{ fontSize: "44px" }}>Advertising</div>
            <div style={{ fontSize: "18px" }}>
              Our talented team knows the South Indian market inside and out. We
              craft messages that resonate with audiences, no matter the
              language. We don't just translate, we amplify your unique brand
              voice.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollSwiper;
