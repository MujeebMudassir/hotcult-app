import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import LoculScroll from "./LoculScroll";
import Banner from "./Banner";

const HyderabadSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const sectionElement = document.querySelector("#hyderabad-section");
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <div className="relative ">
      <LoculScroll></LoculScroll>
      <div className="sticky top-[5vh] pb-[30vh]">
        <MaxWidthWrapper>
          <section
            id="hyderabad-section"
            className=" w-full   mt-[15vh] grid grid-cols-2 items-center overflow-hidden relative z-[999]"
          >
            <div
              className={` pl-2 transition-all duration-1000 ${
                !isVisible ? "opacity-0 translate-x-[-100%]" : "opacity-100"
              } ${isVisible ? "fade-left" : ""}`}
            >
              <p className="text-[24px]">
                South India is a diverse market with unique preferences beyond
                Dosas and Idlis.
              </p>
              <p className="text-[30px] font-bold">
                Is your brand ready for the <span>southern market?</span>
              </p>
            </div>
            <div
              className={`pr-2 transition-all duration-1000  ${
                !isVisible ? "opacity-0 translate-x-[100%]" : "opacity-100"
              } ${isVisible ? "fade-right" : ""}`}
            >
              <img
                className=" rounded-lg overflow-hidden w-[500px]  float-right "
                src="https://i.pinimg.com/736x/83/53/84/835384e774c11c8b829a6193208381a1.jpg"
                alt="Hotcult"
              />
            </div>
          </section>
        </MaxWidthWrapper>
      </div>

      <div className="sticky top-0">
        <Banner />
      </div>
    </div>
  );
};

export default HyderabadSection;
