
import "./images.css";
// import './borders.js';
import { useEffect, useState } from "react";
// import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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
        <img id="image" src={props.event.img} onLoad={() => {
          setcount(count + 1)
          console.log(props.count, "Count");
          if (props.count >= 1) {
            props.setloading(false)
          }
        }} className={isActive} />
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
                height: "20px",
                justifyContent: "center",
                width: "100%",
                bottom:"40px"
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
                href={props.event.ruleBook}
              >
                <button className="RLBook">RuleBook</button>
              </a>
            </div>
          </div>
        )}
        {/* {props.tag && (
          <div
            id="namePlate"
            style={{ backgroundColor: props.color }}
            className={isActive}
          >
            FOOTLOOSE SHOWDOWN
          </div>
        )} */}
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
