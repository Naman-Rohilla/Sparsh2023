import React from "react";
import CaAbout from "./CaAbout";
import CaHome from "./CaHome";
import CaPerks from "./CaPerks";
import CaRegister from "./CaRegister";

const Ca = () => {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          // paddingTop: "100px",
          // overflowX:"hidden";
          position: "relative",
        }}
      >
        <CaHome />
        <CaAbout />
        <CaPerks />
        <CaRegister />
      </div>
    </>
  );
};

export default Ca;
