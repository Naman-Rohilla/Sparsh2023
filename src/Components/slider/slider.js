import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { motion } from "framer-motion";
import SliderText from "./sliderText";

const sliderArray = [
  {
    id: -2,
    img: "i am image",
    hidden: true,
  },
  {
    id: -1,
    img: "i am image",
    hidden: true,
  },
  {
    id: 0,
    img: "i am image 0",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 1,
    img: "i am image 1",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 2,
    img: "i am image 2",
    hidden: false,
    heading: "Head 2",
  },
  {
    id: 3,
    img: "i am image 3",
    hidden: false,
    heading: "Head 3",
  },
  {
    id: 4,
    img: "i am image 4",
    hidden: false,
    heading: "Head 4",
  },
  {
    id: 5,
    img: "i am image 5",
    hidden: false,
    heading: "Head 5",
  },
  {
    id: 6,
    img: "i am image 6",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 7,
    img: "i am image 7",
    hidden: true,
  },
  {
    id: 8,
    img: "i am image",
    hidden: true,
  },
];

export default function Slider() {
  const [bindLength, setbindLength] = React.useState(4);
  const [mainIndex, setmainIndex] = React.useState(2);
  const [reverse, setreverse] = React.useState(false);

  console.log(bindLength, "bindLength");
  console.log(mainIndex, "sliderArray");

  // React.useEffect(() => {
  //   if (mainIndex == 6) {
  //     setreverse(true);
  //   } else if (mainIndex == 0) {
  //     setreverse(false);
  //   }

  //   if (reverse == true) {
  //     setTimeout(() => {
  //       setbindLength(bindLength - 1);
  //       setmainIndex(mainIndex - 1);
  //     }, 4000);
  //   } else {
  //     setTimeout(() => {
  //       setmainIndex(mainIndex + 1);
  //       setbindLength(bindLength + 1);
  //     }, 4000);
  //   }
  // }, [mainIndex, reverse]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          //   backgroundImage: "linear-gradient(to right, #db2777 , #a855f7, #1d4ed8)",
          backgroundColor: "black",
          display: "flex",
          //   alignItems: "space-between",
          justifyContent: "space-between",
          zIndex: 1,
          //   paddingTop: "100px",
          // position: "relative",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-start",
            // backgroundColor: "yellow",
            alignItems: "center",
            paddingLeft: "30px",
          }}
        >
          <SliderText sliderArray={sliderArray} mainIndex={mainIndex} />
        </div>
        <div
          style={{
            // height: "100vh",
            width: "50%",
            //   backgroundImage: "linear-gradient(to right, #db2777 , #a855f7, #1d4ed8)",
            // backgroundColor: "yellow",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            // paddingTop: "100px",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              // justifyContent: "f;ex",
              padding: "0px 30px 0px 0px",
            }}
          >
            <motion.div
              initial="hidden"
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: "1",
                times: [0, 1],
              }}
              style={{
                width: "100%",
                display: "flex",
                // height: "90%",
                alignItems: "center",
                justifyContent: "flex-end",
                // backgroundColor: "purple",
                // padding: "0px 60px 0px 0px",
                position: "relative",
              }}
            >
              {sliderArray
                ?.filter((sA) => {
                  if (sA.id > bindLength - 5 && sA.id <= bindLength) {
                    return sA;
                  }
                })
                .map((sA) => (
                  <motion.div
                    key={sA.id}
                    initial={{
                      marginBottom:
                        sA.id < mainIndex
                          ? 80 * (mainIndex - sA.id)
                          : 80 * (sA.id - mainIndex),
                      opacity:
                        sA.id < mainIndex
                          ? 1.5 / (mainIndex - sA.id + 1)
                          : 1.5 / (sA.id - mainIndex + 1),
                      marginRight:
                        sA.id < mainIndex ? -(80 * (mainIndex - sA.id)) : "0px",
                      marginLeft:
                        sA.id > mainIndex ? -(80 * (sA.id - mainIndex)) : "0px",
                      zIndex:
                        sA.id < mainIndex
                          ? sA.id - (bindLength - 4)
                          : bindLength - (sA.id - mainIndex) - (bindLength - 4),
                    }}
                    animate={
                      mainIndex == sA.id
                        ? {
                            opacity: 1,
                            // default: { ease: "linear" },
                            marginBottom: 0,
                            marginRight: 0,
                            marginLeft: 0,
                            zIndex: 10,
                          }
                        : {
                            marginBottom:
                              sA.id < mainIndex
                                ? 80 * (mainIndex - sA.id)
                                : 80 * (sA.id - mainIndex),
                            opacity:
                              sA.id < mainIndex
                                ? 1.5 / (mainIndex - sA.id + 1)
                                : 1.5 / (sA.id - mainIndex + 1),
                            marginRight:
                              sA.id < mainIndex
                                ? -(80 * (mainIndex - sA.id))
                                : "",
                            marginLeft:
                              sA.id > mainIndex
                                ? -(80 * (sA.id - mainIndex))
                                : "",
                            zIndex:
                              sA.id < mainIndex
                                ? sA.id - (bindLength - 4)
                                : bindLength -
                                  (sA.id - mainIndex) -
                                  (bindLength - 4),
                          }
                    }
                    transition={{
                      duration: 0.2,
                    }}
                    style={{
                      width: "230px",
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "50px",
                    }}
                  >
                    <div
                      style={{
                        visibility: sA.hidden ? "hidden" : "",
                        backgroundColor: "white",
                        height: "120px",
                        width: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow:
                          sA.id <= mainIndex
                            ? `0px ${(sA.id - (bindLength - 4)) * 2}px ${
                                (sA.id - (bindLength - 4)) * 10
                              }px gray`
                            : `0px ${(bindLength - sA.id) * 2}px 10px gray`,
                      }}
                    >
                      {sA.id}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
            <motion.div
              initial="hidden"
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: "1",
                times: [0, 1],
              }}
              style={{
                zIndex: 2,
                display: "flex",
                marginTop: "-60px",
              }}
            >
              <div
                onClick={() => {
                  if (mainIndex == 0 || mainIndex < 0) {
                    return;
                  }
                  setbindLength(bindLength - 1);
                  setmainIndex(mainIndex - 1);
                }}
                style={{
                  // paddingLeft: "0px",
                  // marginLeft: 80,
                  width: "300px",
                  // backgroundColor: "blue"
                }}
              >
                <ArrowCircleLeftIcon
                  sx={{
                    fontSize: "1.5rem",
                    color: "white",
                    ":hover": {
                      // fontSize: "1.8rem"
                      color: "#e4e4e7",
                    },
                  }}
                />
              </div>
              <div
                onClick={() => {
                  if (mainIndex == 6 || mainIndex > 6) {
                    return;
                  }
                  setbindLength(bindLength + 1);
                  setmainIndex(mainIndex + 1);
                }}
                style={{
                  // marginLeft: 80
                  width: "200px",
                }}
              >
                <ArrowCircleRightIcon
                  sx={{
                    fontSize: "1.5rem",
                    // marginLeft: 80,
                    color: "white",
                    ":hover": {
                      color: "#e4e4e7",
                    },
                  }}
                />
              </div>
            </motion.div>
          </div>
          {/* <div style={{
            color: "white",
            backgroundColor: "blue",
            
            width: "200px"
          }}>hello</div> */}
        </div>
      </div>
    </>
  );
}
