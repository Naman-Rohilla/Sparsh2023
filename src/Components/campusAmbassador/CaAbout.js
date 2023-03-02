import React from "react";
import AboutCard from "./AboutCard";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

const CaAbout = () => {
  const matches = useMediaQuery("(max-width: 720px)");
  const content1 =
    "Our program provides you with an exciting opportunity to represent our organization on your campus, while gaining valuable leadership and networking skills.";
  const content2 =
    "As a campus ambassador, you will have the chance to collaborate with like-minded individuals, engage in meaningful projects and make a positive impact on your community.";
  return (
    <div
      class="about-us"
      style={{
        backgroundColor: "black",
        backgroundImage:
          "radial-gradient(circle at bottom right, blue -30%, black, transparent)",
      }}
    >
      <div
        class="heading center"
        style={{
          flexDirection: "row",
        }}
      >
        {matches ? (
          <></>
        ) : (
          <>
            {" "}
            <span className="nonfilled">ABOUT</span>
            <span className="filled">ABOUT</span>
            <span className="nonfilled">ABOUT</span>
          </>
        )}
      </div>
      <AboutCard mode={true} content={content1} img={img2} />
      <AboutCard mode={false} content={content2} img={img1} />
    </div>
  );
};

export default CaAbout;
