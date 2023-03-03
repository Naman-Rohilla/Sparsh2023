import React from "react";
import "./caCss.css";
import styles from "./styles";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CaHome = () => {
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
  // console.log(width);
  return (
    <>
      <div style={styles.cahero}>
        <div className="text-block" style={{ paddingBottom: "120px" }}>
          <p style={{ ...styles.l1, fontSize: isMobile ? 24 : 48 }}>
            Join Our Mission, become our
          </p>
          <p
            style={
              isMobile
                ? { ...styles.l2, fontSize: 48 }
                : { ...styles.l2, fontSize: 128 }
            }
          >
            Campus
          </p>
          <p
            style={
              isMobile
                ? { ...styles.l3, fontSize: 32 }
                : { ...styles.l3, fontSize: 96 }
            }
          >
            Ambassador
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-chevron-double-down svg"
          viewBox="0 0 16 16"
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            color: "white",
            height: "50px",
            paddingTop: "-20",
          }}
        >
          <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <div
          animate={{ opacity: [0.5, 1, 0.5] }}
          style={{
            ...styles.neon.green,
            filter: isMobile ? "blur(150px)" : "blur(300px)",
          }}
        ></div>
        <div
          animate={{ opacity: [0.5, 1, 0.5] }}
          style={{
            ...styles.neon.blue,
            filter: isMobile ? "blur(150px)" : "blur(300px)",
          }}
        ></div>
      </div>
    </>
  );
};

export default CaHome;
