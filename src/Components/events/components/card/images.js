import "./images.css";
// import './borders.js';
import { useEffect, useState } from "react";
// import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import RLBook from "../rlBoookBtn";
// import image from './Vocal_voyage.jpg'

const Images = (props) => {
  const [isActive, setIsActive] = useState(null);

  const [count, setcount] = useState(0);

  const touchHandler = () => {
    setIsActive("active");
  };

  const outCursurHandler = () => {
    setIsActive(null);
  };

  useEffect(() => {
    setTimeout(() => {
      props.setloading(false);
    }, 10000);
  }, []);

  return (
    <>
      <div
        onMouseOver={touchHandler}
        onMouseOut={outCursurHandler}
        id="som"
        className={isActive}
      >
        <img
          id="image"
          src={props.event.img}
          onLoad={() => {
            props.setloading(false);
          }}
          className={isActive}
        />
        {props.tag && (
          <div id="layer" className={isActive}>
            <div id="heading" className={isActive}>
              {props.event.name}
            </div>
            <div id="line" className={isActive} />
            <div id="text" className={isActive}>
              {props.event.disc}
            </div>

            <div
              style={{
                position: "absolute",
                display: "flex",
                width: "100%",
                bottom: "0px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="rgbtns">
                <a href={props.event.regSvnit} target="_blank">
                  <button
                    style={{
                      color: props.event.shadowColor,
                      boxShadow: `0px 0px 0px 1px ${props.event.shadowColor}`,
                    }}
                    class="regBtn"
                    id="rgSvnit"
                    role="button"
                  >
                    Register Svnitian
                  </button>
                </a>

                <a href={props.event.regNSvnit} target="_blank">
                  <button
                    style={{
                      color: props.event.shadowColor,
                      boxShadow: `0px 0px 0px 1px ${props.event.shadowColor}`,
                    }}
                    class="regBtn"
                    id="rgnSvnit"
                    role="button"
                  >
                    Register Outsider
                  </button>
                </a>
              </div>
              {props.event.ruleBook.length > 0 ? (
                <>
                  <a target="_blank" href={props.event.ruleBook}>
                    <button
                      style={{
                        color: props.event.shadowColor,
                        boxShadow: `0px 0px 0px 1px ${props.event.shadowColor}`,
                        marginBottom: "10px",
                      }}
                      class="RLBook"
                      id="rgnSvnit"
                      role="button"
                    >
                      RULEBOOK
                    </button>{" "}
                  </a>
                </>
              ) : (
                <>
                  <span>
                    <button
                      style={{
                        color: props.event.shadowColor,
                        boxShadow: `0px 0px 0px 1px ${props.event.shadowColor}`,
                        marginBottom: "10px",
                        width: "200px",
                      }}
                      class="RLBook"
                      id="rgnSvnit"
                      role="button"
                    >
                      Rulebook Releasing Soon
                    </button>{" "}
                  </span>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Images;
