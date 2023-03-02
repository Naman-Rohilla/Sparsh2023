import React from "react";
import "./caCss.css";

const CaHome = () => {
  return (
    <>
      <div
        className="cahome"
        style={{
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "100px",
          overflowY:"hidden",
          backgroundImage: "radial-gradient(circle at top left,blue -30%,black, transparent)",
        }}
      >
        {/* <div className="backCircle">

        </div> */}
        <div style={{ width: "100%", paddingBottom: "3rem",zIndex: 1}}>
          <p
            className="txt"
            style={{
              fontFamily: "Syne",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "4rem",
              lineHeight: "115px",
              textAlign: "center",
              color: "#C0C0C0",
            }}
          >
            Join Our Mission, become our
          </p>
          <p
            className="campus"
            style={{
              fontFamily: "Syne",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "115px",
              textAlign: "center",
              background:
                "linear-gradient(94.76deg, #9E86FF 46.15%, #9FFF7E 90.01%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
              mozBackgroundClip: "text",
              mozTextFillColor: "transparent",
            }}
          >
            Campus
          </p>
          <p
            className="ambassador"
            style={{
              fontFamily: "Syne",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "115px",
              textAlign: "center",
              webkitTextStroke: "2px #FFFFFF",
            }}
          >
            Ambassador
          </p>
          <div className="center" style={{
                marginTop: "100px",
                marginBottom: "50px",
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-chevron-double-down svg"
              viewBox="0 0 16 16"
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color:"white",
              }}
            >
              <path
                fill-rule="evenodd"
                d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaHome;
