import img_1 from "./img2.jpg";
import "./images.css";
// import './borders.js';
import { useState } from "react";
// import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Images = (props) => {
  const [isActive, setIsActive] = useState(null);

  const touchHandler = () => {
    setIsActive("active");
  };

  const outCursurHandler = () => {
    setIsActive(null);
  };

  return (
    <>
      <div
        onMouseOver={touchHandler}
        onMouseOut={outCursurHandler}
        id="som"
        className={isActive}
      >
        <img id="image" src={img_1} className={isActive} />
        {props.tag && (
          <div id="layer" className={isActive}>
            <div id="heading" className={isActive}>
              KING'S NIGHT
            </div>
            <div id="line" className={isActive} />
            <div id="text" className={isActive}>
              Open your stylesheet (what name you have), it doesn't matter, just
              open stylesheet and paste this code
            </div>

            <div
              style={{
                position: "absolute",
                display: "flex",
                height: "20px",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <a>
                <button className="regBtn">Register</button>
              </a>
              <a>
                <button className="RLBook">RuleBook</button>
              </a>
            </div>
          </div>
        )}
        {props.tag && (
          <div
            id="namePlate"
            style={{ backgroundColor: props.color }}
            className={isActive}
          >
            KING'S NIGHT
          </div>
        )}
        <div id="upper" className={isActive}></div>
        <div id="midl">
          <div id="left" className={isActive}></div>
          <div id="right" className={isActive}></div>
        </div>
        <div id="lower" className={isActive}></div>
      </div>
    </>
  );
};

export default Images;
