import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

function AboutUs() {
  return (
    <>
      <Hero
        title={"Learn More About Us | AIIMS LUCKNOW INDIA"}
        imageUrl={"/about.jpg"}
      />
      <Biography imageUrl={"/india.jpg"} />
    </>
  );
}

export default AboutUs;
