import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { div } from "framer-motion/client";

const Banner = () => {
  return (
   
  <MaxWidthWrapper >
      <section style={{ width: "100%", height: "100vh", marginTop: "30px" }}>
        <div>
          <img
            src="https://s3.ap-south-1.amazonaws.com/zuparrtesting/20241125T131207.536Z_1.jpg"
            // alt="Tribecca"
            style={{
              width: "100%",
              borderRadius: "30px",
            }}
          />
        </div>
      </section>
    </MaxWidthWrapper>
  
  );
};

export default Banner;
