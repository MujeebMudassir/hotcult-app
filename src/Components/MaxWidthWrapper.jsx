import React from "react";

const MaxWidthWrapper = ({ children }) => {
  return <section className="max-w-[1350px] mx-auto">{children}</section>;
};

export default MaxWidthWrapper;
