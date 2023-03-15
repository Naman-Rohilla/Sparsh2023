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
        <img id="image" src="./event_dance.png" className={isActive} />
        {props.tag && (
          <div id="layer" className={isActive}>
            <div id="heading" className={isActive}>
              KING'S NIGHT
            </div>
            <div id="line" className={isActive} />
            <div id="text" className={isActive}>
              Sparsh presents dancing events, a dazzling demonstration of artistic innovation with a dynamic
              ensemble of dancers whose skillful performances will captivate you.
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
              <a
                href="/register"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  props.data.data.setactiveUrl("/register");
                }}
              >
                <button className="regBtn">Register</button>
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view"
              >
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
