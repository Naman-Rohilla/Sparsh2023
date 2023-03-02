import React from "react";

const AboutCard = ({ mode, content,img }) => {
  return (
    <div
      className="center"
      style={{
        flexDirection: !mode ? "row" : "row-reverse",
        color: "white",
        paddingTop: "30px",
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingBottom: "30px"
      }}
    >
      <div
        className="content"
        style={{
          width: "50%",
          padding: "10px",
          letterSpacing: "2px",
        }}
      >
        {content}
        <div className="line"></div>
      </div>
      <div
        className="center"
        style={{
          width: "50%",
        }}
      >
        <div
          style={{
            border: "5px solid",
            borderImage: "linear-gradient(45deg, #5be896, #1e8dda) 1",
            width:"50%",
          }}
        >
          <img
            src={img}
            alt=""
            style={{
              width: "100%",
              position:"relative",
              top:"25px",
              right:"25px",
              zIndex:1
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
