import "./sponsors.css";
import { motion } from "framer-motion";

const sliderArray = [
  {
    id: 0,
    img: "i am image",
    hidden: true,
  },
  {
    id: 1,
    img: "i am image",
    hidden: true,
  },
  {
    id: 2,
    img: "i am image 0",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 3,
    img: "i am image 1",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 4,
    img: "i am image 2",
    hidden: false,
    heading: "Head 2",
  },
  {
    id: 5,
    img: "i am image 3",
    hidden: false,
    heading: "Head 3",
  },
  {
    id: 6,
    img: "i am image 4",
    hidden: false,
    heading: "Head 4",
  },
  {
    id: 7,
    img: "i am image 5",
    hidden: false,
    heading: "Head 5",
  },
  {
    id: 8,
    img: "i am image 6",
    hidden: false,
    heading: "Head 6",
  },
];

export default function Sponsors() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
          paddingTop: "100px",
          color: "white",
        }}
        className="slider"
      >
        <div
          style={{
            // width: "100%",
            // backgroundColor: "blue",
            // height: "10px",
            // zIndex: 100,
            display: "flex",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          <motion.div
            initial={{
              width: "0px",
              opacity: 0,
            }}
            animate={{
              width: "160px",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              height: "40px",
              width: "160px",
              backgroundColor: "#f472b6",
              transform: "skewX(10deg)",
              transform: "skewY(-5deg)",
              position: "absolute",
              opacity: 0.8,
            }}
          ></motion.div>
          <motion.div
            initial={{
              width: "0px",
              opacity: 0,
            }}
            animate={{
              width: "150px",
              opacity: 0.7,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              height: "40px",
              width: "150px",
              backgroundColor: "#ec4899",
              zIndex: "100",
              opacity: 0.7,
              // transform: "skewX(10deg)",
              transform: "rotateX(90deg)",
              transform: "skewX(10deg)",
              // transform: "rotateX(-10deg)"
              position: "absolute",
            }}
          ></motion.div>
          <motion.div
            initial={{
              // width: "0px",
              opacity: 0,
            }}
            animate={{
              // width: "150px",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              zIndex: 100,
              paddingTop: "5px",
              fontSize: "1.2rem",
            }}
          >
            Top Sponsors
          </motion.div>
        </div>
        <div
          style={{
            // width: "100%",
            // justifyContent: "space-around",
            position: "absolute",

            display: "flex",
          }}
          className="slide-track"
        >
          {sliderArray?.map((sA) => (
            <>
              <motion.div className="slide">
                {/* <div></div> */}
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "white",
                    opacity: 0.5,
                    height: "100px",
                    width: "100%",
                  }}
                ></div>
                <div>{sA.img}</div>
              </motion.div>
            </>
          ))}
        </div>
        <div
          style={{
            // width: "100%",
            position: "absolute",
            display: "flex",
          }}
          className="slide-track-2"
        >
          {sliderArray?.map((sA) => (
            <>
              <motion.div className="slide">
                {/* <div></div> */}
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "white",
                    opacity: 0.5,
                    height: "100px",
                    width: "100%",
                  }}
                ></div>
                <div>{sA.img}</div>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
