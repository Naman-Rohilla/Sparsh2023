import React from "react";
import CaHome from "./CaHome";
import CaAbout from "./CaAbout";
import CaPerks from "./CaPerks";
import CaRegister from "./CaRegister";

const Ca = () => {
  return (
    <>

      <CaHome />
      <CaAbout />
      <CaPerks />
      <CaRegister />

      {/* <div
        style={{
          backgroundColor: "black",
          position: "fixed",
          width: "100%",
          height: "100vh",
          opacity: 0.95,
          zIndex: 90,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "transparent",
          position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex: 95,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
        }}
      >
        RELEASING SOON
      </div> */}
    </>
  );
};

export default Ca;
