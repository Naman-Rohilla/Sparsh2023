import React from "react";
import AboutCard from "./AboutCard";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import styles from "./styles";

const CaAbout = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1000;

  const content1 =
    "Our program provides you with an exciting opportunity to represent our organization on your campus, while gaining valuable leadership and networking skills.";
  const content2 =
    "As a campus ambassador, you will have the chance to collaborate with like-minded individuals, engage in meaningful projects and make a positive impact on your community.";
  return (
    <div
      class="about-us"
      style={{
        backgroundColor: "black",
      }}
    >
      <div
        class="heading center"
        style={{
          flexDirection: "row",
        }}
      >
        {!isMobile && (
          <span style={{ ...styles.about_heading, opacity: 0.5 }}>ABOUT</span>
        )}
        <span style={{ ...styles.about_heading, fontSize: isMobile ? 40 : 64 }}>
          ABOUT
        </span>
        {!isMobile && (
          <span style={{ ...styles.about_heading, opacity: 0.5 }}>ABOUT</span>
        )}
      </div>
      <div styles={{ marginTop: "10%" }}>
        <AboutCard content={content1} reverse={false} img={img2} />
        <AboutCard content={content2} reverse={true} img={img1} />
      </div>
    </div>
  );
};

export default CaAbout;
