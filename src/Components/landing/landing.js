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
          <img src="./home_flicker.gif" height="100%" width="100%"></img>
        </div>
        <div className="right-landing-container">
          <div
            style={{
              paddingBottom: "40px",
              fontSize: "20px",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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

            <div
              style={{
                backgroundColor: "white",
                padding: "5px 10px 5px 10px",
                color: "black",
                fontSize: "14px",
                marginTop: "20px",
              }}
            >
              Register Here
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
        <div className="landing-2-left">
          <img src="./fantasy.png" className="landing-2-left-img"></img>
        </div>
        <div className="landing-2-right">
          <span className="landing-2-heading">Heading</span>
          <span className="landing-2-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </span>
          <span className="landing-2-line"></span>
          <span className="landing-2-button"></span>
        </div>
      </div>
      <div id="main-landing-3">
        <div className="landing-3-left">
          <span className="landing-3-heading">Heading</span>
          <span className="landing-3-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
          <span className="landing-3-line"></span>
          <span className="landing-3-button"></span>
        </div>
        <div className="landing-3-right">
          <img src="./fantasy.png" className="landing-3-left-img"></img>
        </div>
      </div>
      <div id="main-landing-4">
        <div className="landing-4-slider">
          {sliderArray1
            .filter((sA) => {
              if (sA.id == sliderIndex1) {
                return sA;
              }
            })
            .map((sA) => (
              <motion.div
                key={sA.id}
                initial="hidden"
                animate={{
                  opacity: [0, 1],
                  y: [-20, 0],
                }}
                transition={{
                  duration: "1",
                  times: [0, 1],
                }}
                className="landing-4-slider-items"
              >
                <div className="landing-4-slider-heading">{sA.heading}</div>
                <div className="landing-4-slider-subheading">
                  {sA.subheading}
                </div>
                <div className="landing-4-slider-content">{sA.data}</div>
              </motion.div>
            ))}

          <PlayArrowOutlinedIcon
            onClick={() => {
              if (sliderIndex1 == 3) {
                return;
              }
              setsliderIndex1(sliderIndex1 + 1);
            }}
            className="right-slider-button"
          />
          <PlayArrowOutlinedIcon
            className="left-slider-button "
            onClick={() => {
              if (sliderIndex1 == 0) {
                return;
              }
              setsliderIndex1(sliderIndex1 - 1);
            }}
          />
        </div>
      </div>
      <div id="main-landing-5">
        <video
          width="90%"
          height="50%"
          className="landing-5-video"
          autoplay="autoplay"
          muted
          loop
        >
          <source src="/Videos/demo.mp4" type="video/mp4"></source>
        </video>
      </div>
      {matches ? <SliderMobile /> : <Slider />}
    </>
  );
}
