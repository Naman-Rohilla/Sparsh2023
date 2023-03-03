import React, { useEffect, useState } from "react";
import letter from "./assets/LETTER.png";
import pronites from "./assets/PRONITES.png";
import certificates from "./assets/CERTIFICATES.png";
import networking from "./assets/NETWORKING.png";
import merchandies from "./assets/MERCHANDIES.png";
import management from "./assets/MANAGEMENT.png";
import "./perks.css";
import styles from "./styles";
const CaPerks = () => {
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
  return (
    <div class="PERKS-MAIN">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        {!isMobile && (
          <span style={{ ...styles.about_heading, opacity: 0.5, fontSize: 40 }}>
            PERKS
          </span>
        )}
        <span
          style={{
            ...styles.about_heading,
            opacity: 0.8,
            fontSize: isMobile ? 40 : 64,
          }}
        >
          PERKS
        </span>
        {!isMobile && (
          <span style={{ ...styles.about_heading, opacity: 0.5, fontSize: 40 }}>
            PERKS
          </span>
        )}
      </div>
      <div class="perks">
        <div class="cell">
          <div class="img">
            <div class="img-border">
              <img src={letter} class="img-prop" />
            </div>
          </div>
          <div class="txt">Letter of Recommendation</div>
        </div>
        <div class="cell">
          <div class="img">
            <div class="img-border">
              <img src={pronites} class="img-prop" />
            </div>
          </div>
          <div class="txt">Free Pro Nites Pass</div>
        </div>
        <div class="cell">
          <div class="img">
            <div class="img-border">
              <img src={certificates} class="img-prop" />
            </div>
          </div>
          <div class="txt">Certificates</div>
        </div>
        <div class="cell">
          <div class="img">
            <div class="img-border">
              <img src={networking} class="img-prop" />
            </div>
          </div>
          <div class="txt">Networking</div>
        </div>
        <div class="cell">
          <div class="img">
            <div class="img-border">
              <img src={merchandies} class="img-prop" />
            </div>
          </div>
          <div class="txt">Goodies</div>
        </div>
        <div class="cell">
          <div class="img">
            <div class="img-border">
              <img src={management} class="img-prop" />
            </div>
          </div>
          <div class="txt">Management Skills</div>
        </div>
      </div>
    </div>
  );
};

export default CaPerks;
