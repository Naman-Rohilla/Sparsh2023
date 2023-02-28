import "./landing.css";
import SliderAnimationText from "../about/sliderAnimationText";
import Typewriter from "typewriter-effect";
import { display } from "@mui/system";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "../about/slider";
import SliderMobile from "../about/sliderMobile";
import useMediaQuery from "@mui/material/useMediaQuery";

const sliderArray1 = [
  {
    id: 0,
    heading: "heading 1",
    subheading: "Lorem Ipsum is simply dummy text of the printing",
    data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 1,
    heading: "heading 2",
    subheading: "Lorem Ipsum is simply dummy text of the printing",
    data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 2,
    heading: "heading 3",
    subheading: "Lorem Ipsum is simply dummy text of the printing",
    data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 3,
    heading: "heading 4",
    subheading: "Lorem Ipsum is simply dummy text of the printing",
    data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];

export default function Landing() {
  const [sliderIndex1, setsliderIndex1] = React.useState(0);

  const matches = useMediaQuery("(max-width: 720px)");
  return (
    <>
      <div id="main-landing">
        <div className="landing-gif">
          <img src="./arura_home_final.gif" height="100%" width="100%"></img>
        </div>
        <div className="right-landing-container">
          <div className="right-landing-typewriter">
            <div className="right-landing-typewriter-class">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome to Gujarat's best cultural Fest")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("You can Register Here!")
                    .pauseFor(2500)
                    .start();
                }}
              />
            </div>

            <div className="right-landing-register">
              <button class="custom-btn btn-3">
                <span>Register Here</span>
              </button>
              {/* <div
                style={{
                  height: "30px",
                  width: "40px",
                  // backgroundColor: "red",
                  // transform: "translateX(15px)",
                  borderLeft: "2px solid #fbcfe8",
                  borderBottom: "2px solid #fbcfe8",
                  borderTop: "2px solid #fbcfe8",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "40px",
                  borderBottom: "2px solid #fbcfe8",
                  // backgroundColor: "#fbcfe8",
                  transform: "skewX(45deg)",
                  borderTop: "2px solid #fbcfe8",
                  // borderBottom: "2px solid #fbcfe8"
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "40px",
                  // backgroundColor: "#fbcfe8",
                  borderTop: "2px solid #fbcfe8",
                  // borderBottom: "2px solid #fbcfe8",
                  transform: "skewX(45deg)",
                  marginLeft: "10px"
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "40px",
                  // backgroundColor: "#fbcfe8",
                  // transform: "translateX(-15px)",
                  position: "absolute",
                  insetInlineEnd: 0,
                  borderRight: "2px solid #fbcfe8",
                  borderBottom: "2px solid #fbcfe8",
                  borderTop: "2px solid #fbcfe8",
                  
                }}
              ></div> */}
            </div>
          </div>
          <ul id="countdown">
            <li id="days">
              <div class="number">00</div>
              <div class="label">Days</div>
            </li>
            <li id="hours">
              <div class="number">00</div>
              <div class="label">Hours</div>
            </li>
            <li id="minutes">
              <div class="number">00</div>
              <div class="label">Minutes</div>
            </li>
            <li id="seconds">
              <div class="number">00</div>
              <div class="label">Seconds</div>
            </li>
          </ul>
        </div>
      </div>
      <div id="main-landing-2">
        <motion.div
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              // x: 50,
            },
            visible: {
              opacity: 1,
              // x: 0,
            },
          }}
          transition={{
            duration: 2,
          }}
          whileInView="visible"
          className="landing-2-left"
        >
          <img src="./shirley.png" className="landing-2-left-img"></img>
        </motion.div>
        <motion.div
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              // x: -50,
            },
            visible: {
              opacity: 1,
              // x: 0,
            },
          }}
          transition={{
            duration: 2,
          }}
          whileInView="visible"
          className="landing-2-right"
        >
          <span className="landing-2-heading">Heading</span>
          <span className="landing-2-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </span>
          <span className="landing-2-line"></span>
          <span className="landing-2-button">shirley Setia</span>
        </motion.div>
      </div>
      
    </>
  );
}
