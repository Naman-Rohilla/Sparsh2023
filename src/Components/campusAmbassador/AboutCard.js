import React, { useEffect, useState } from "react";
import styles from "./styles";

const AboutCard = ({ content, img, reverse }) => {
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

  const isMobile = width <= 786;
  return (
    <div>
      <div
        style={{
          ...styles.about_content,
          flexDirection: isMobile
            ? "column"
            : reverse
            ? "row-reverse"
            : "reverse",
          textAlign: isMobile ? "center" : "left",
          marginTop: 50,
        }}
      >
        <div
          style={{
            flexBasis: "30%",
            letterSpacing: "2px",
          }}
        >
          <div style={{ fontSize: "1.2rem" }}>{content}</div>
          {!isMobile && <div style={styles.neon_divider}></div>}
        </div>
        <div style={{}}>
          <div
            style={{
              textAlign: "center",
              margin: isMobile ? "100px auto" : "auto",
              border: "5px solid",
              borderImage: "linear-gradient(45deg, #5be896, #1e8dda) 1",
              width: "50%",
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                position: "relative",
                top: "25px",
                right: "25px",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
