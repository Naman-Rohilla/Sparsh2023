import "./images.css";
// import './borders.js';
import { useEffect, useState } from "react";
// import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import RLBook from "../rlBoookBtn";
import Modal from "@mui/material/Modal";

// import image from './Vocal_voyage.jpg'

const Images = (props) => {
  const [isActive, setIsActive] = useState(null);
  const [open, setOpen] = useState(false);

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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "400px",
            // marginTop: "0px",
            overflowY: "scroll",
            width: "400px",
            backgroundColor: "#134e4a",
            // justifyContent: "center",
           color: "white",
            padding: "20px 40px 20px 40px",
            // textAlign: "justify",
          }}
        >
          <span style={{
             textAlign: "justify",
             paddingBottom: "5px",
          }}>
            Dear Students,
          </span>
          <span style={{
             textAlign: "justify",
             paddingBottom: "5px",
          }}>
            We are excited to invite you to Sparsh, our Annual Cultural fest at
            the Sardar Vallabhbhai National Institute of Technology. This is a
            celebration of diverse cultures and talents from across the country,
            and we want you to be a part of it.
          </span>
          <span style={{
             textAlign: "justify",
             paddingBottom: "5px",
          }}>
            With an array of events like Dancing, Singing or Dramatic
            Competition, Battle of the Band, Battle of the DJ, Magic Show, Bike
            Show, Car Show, various types of workshops, as well as fun events of
            Rebounce. Informals Furthermore, 15-20 artists from all genres will
            keep you elevated.
          </span>
          <span style={{
             textAlign: "justify",
             paddingBottom: "5px",
          }}>
            Sparsh also has a varied range of exhibitions, such as the NCC,
            which allows you to shoot a rifle, and the NSS, which has a blood
            donation camp and free eye checks, as well as art exhibitions.
          </span>
         
          <span style={{
             textAlign: "justify",
             paddingBottom: "5px",
          }}>
            Mark your calendars for April 6th–9th and get ready to join us at
            Sparsh. We look forward to seeing you there!
          </span>
          <span style={{
            //  textAlign: "justify",
             paddingBottom: "5px",
          }}>Best regards,</span>
          <span>Shashwat Gupta Publicity Head,</span>
          <span>Sparsh 2023 Mobile no.</span>
          <span> 8318411838</span>
          <span>
            {" "}
            Instagram Page of Sparsh-
           <a href=" https://instagram.com/sparsh.nitsurat?igshid=YmMyMTA2M2Y=">https://instagram.com/sparsh.nitsurat?igshid=YmMyMTA2M2Y=</a>
          </span>
          <span>
            {" "}
            After movie of Sparsh 2k22-
            <a href="https://www.instagram.com/reel/CoEZRLOvSLX/?igshid=YmMyMTA2M2Y=">https://www.instagram.com/reel/CoEZRLOvSLX/?igshid=YmMyMTA2M2Y=</a>
          </span>
        </div>
      </Modal>
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
                    {props?.event?.regNSvnit?.length > 0
                      ? "Register Svnitian"
                      : "Register Students"}
                  </button>
                </a>
                {props?.event?.regNSvnit.length > 0 && (
                  <a href={props?.event?.regNSvnit} target="_blank">
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
                )}
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
                      onClick={() => setOpen(true)}
                      id="rgnSvnit"
                      role="button"
                    >
                      {props?.event?.regNSvnit.length > 0 ? "Rulebook Releasing Soon" : "Read Instructions"}
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
