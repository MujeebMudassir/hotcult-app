import React, { useEffect, useRef, useState } from "react";
import localImage from "../../Images/white-image.jpg";
const Section2 = () => {
  const [isLocalVisible, setIsLocalVisible] = useState(false);
  const [isCultureVisible, setIsCultureVisible] = useState(false);
  const [visibleTextIndexLocal, setVisibleTextIndexLocal] = useState(-1);
  const [visibleTextIndexCulture, setVisibleTextIndexCulture] = useState(-1);

  const localRef = useRef(null);
  const cultureRef = useRef(null);

  const localIndex = useRef(0); // Use useRef to track the index for local
  const cultureIndex = useRef(0); // Use useRef to track the index for culture

  useEffect(() => {
    const observerLocal = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLocalVisible) {
          setIsLocalVisible(true); // Set to true once and only once
          revealTextOneByOne("local");
        }
      },
      { threshold: 0.9 }
    );

    const observerCulture = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCultureVisible) {
          setIsCultureVisible(true); // Set to true once and only once
          revealTextOneByOne("culture");
        }
      },
      { threshold: 0.8 }
    );

    if (localRef.current) {
      observerLocal.observe(localRef.current);
    }

    if (cultureRef.current) {
      observerCulture.observe(cultureRef.current);
    }

    return () => {
      if (localRef.current) {
        observerLocal.unobserve(localRef.current);
      }
      if (cultureRef.current) {
        observerCulture.unobserve(cultureRef.current);
      }
    };
  }, [isLocalVisible, isCultureVisible]);

  const revealTextOneByOne = (section) => {
    const interval = setInterval(() => {
      if (section === "local") {
        if (localIndex.current >= 2) {
          clearInterval(interval); // Stop after 2 texts
        } else {
          setVisibleTextIndexLocal(localIndex.current);
          localIndex.current += 1;
        }
      } else if (section === "culture") {
        if (cultureIndex.current >= 4) {
          clearInterval(interval); // Stop after 4 texts
        } else {
          setVisibleTextIndexCulture(cultureIndex.current);
          cultureIndex.current += 1;
        }
      }
    }, 500); // Adjust delay between reveals
  };

  return (
    <section className="relative w-screen h-screen">
     

      {/* LOCAL */}
      <div
        ref={localRef}
        className="text-[120px] relative md:text-[200px] lg:text-[300px] leading-none text-[#212529]"
      >
        <span
          className={`transition-all duration-1000 relative inline-block`}
          style={{
            backgroundImage: `url(${localImage})`, // Set the image as a background
            backgroundSize: "cover", // Ensure the image covers the text area
            backgroundPosition: "center", // Center the background image
            backgroundClip: "text", // Clip the background to the text
            WebkitBackgroundClip: "text", // Webkit-prefixed version for cross-browser support
            color: "transparent", // Make the text transparent so the background shows through
            display: "inline-block", // Ensure inline-block behavior
            width: isLocalVisible ? "300px" : "0px", // Control the width of the span
            height: "auto", // Let the height adjust based on the text size
          }}
        >
          <span
            className=" transition-all duration-1000"
            style={{
              fontSize: "250px",
              color: isLocalVisible ? "transparent" : "#212529",
            }}
          >
            LO
          </span>
          {/* Keep text size unaffected */}
          <div
            className="transition-all duration-1000"
            style={{
              backgroundColor: "#fff",
              height: "30px",

              width: isLocalVisible ? "300px" : "0px",
            }}
          ></div>
        </span>
        <span className="ml-[290px] absolute left-0 top-0">cal</span>
        <div className="absolute bottom-[-30px] text-white pl-5 w-full">
        <table className="w-[250px] md:w-[350px]">
          <tbody>
            <tr>
              <td
                className={`text-[12px] md:text-[16px] ${
                  visibleTextIndexLocal >= 0 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                142 Districts
              </td>
              <td
                className={`text-right text-[12px] md:text-[16px] ${
                  visibleTextIndexLocal >= 1 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                50+ Language Dialects
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      {/* <div
        ref={cultureRef}
        className="text-[120px] relative md:text-[200px] lg:text-[300px]  leading-none text-[#212529]"
      >
        <span
          className={`transition-all duration-1000 relative inline-block`}
          style={{
            backgroundImage: `url(${localImage})`, // Set the image as a background
            backgroundSize: "cover", // Ensure the image covers the text area
            backgroundPosition: "center", // Center the background image
            backgroundClip: "text", // Clip the background to the text
            WebkitBackgroundClip: "text", // Webkit-prefixed version for cross-browser support
            color: "transparent", // Make the text transparent so the background shows through
            display: "inline-block", // Ensure inline-block behavior
            width: isCultureVisible ? "350px" : "0px", // Control the width of the span
            height: "auto", // Let the height adjust based on the text size
          }}
        >
          <span
            className=" transition-all duration-1000"
            style={{
              fontSize: "260px",
              color: isCultureVisible ? "transparent" : "#212529",
            }}
          >
            COL
          </span>
          <div
            className="transition-all duration-1000"
            style={{
              backgroundColor: "#fff",
              height: "30px",

              width: isCultureVisible ? "350px" : "0px",
            }}
          ></div>
        </span>
        <span className="ml-[350px] absolute left-0 top-0">TURE</span>
        <div className="absolute bottom-[-30px] text-white pl-5 w-full">
        <table >
          <tbody>
          <tr >
              <td
                className={`text-[12px] md:text-[16px] pr-7 ${
                  visibleTextIndexCulture >= 0 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                600-year-old heritage
              </td>
              <td
                className={`text-[12px] md:text-[16px] ${
                  visibleTextIndexCulture >= 1 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                Home to the country's largest startup hub
              </td>
              <td
                className={`text-[12px] md:text-[16px] ${
                  visibleTextIndexCulture >= 2 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                50+ Language Dialects
              </td>
              <td
                className={`text-right text-[12px] md:text-[16px] ${
                  visibleTextIndexCulture >= 3 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                India's first superhero
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div> */}

      {/* CULTURE */}
      <div
        ref={cultureRef}
        className="text-[120px] relative md:text-[200px] lg:text-[300px] leading-none text-right text-[#212529]"
      >
        <span
          className={`transition-all duration-1000 ${
            isCultureVisible ? "underline text-white" : "text-[#212529]"
          }`}
        >
          CUL
        </span>
        ture
     

      <div className="absolute text-white bottom-[-50px] pr-5 w-full">
        <table className="w-[80%] md:w-[65%] ml-[20%] md:ml-[34%]">
          <tbody>
            <tr>
              <td
                className={`text-[12px] md:text-[16px] ${
                  visibleTextIndexCulture >= 0 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                600-year-old heritage
              </td>
              <td
                className={`text-[12px] md:text-[16px] ${
                  visibleTextIndexCulture >= 1 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                Home to the country's largest startup hub
              </td>
              <td
                className={`text-[12px] md:text-[16px] ${
                  visibleTextIndexCulture >= 2 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                50+ Language Dialects
              </td>
              <td
                className={`text-right text-[12px] md:text-[16px] ${
                  visibleTextIndexCulture >= 3 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                India's first superhero
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </section>
  );
};

export default Section2;
