import "./sponsors.css";
import { motion } from "framer-motion";
import SouthIcon from "@mui/icons-material/South";
import sparshPdf from "../../pdf/sparsh.pdf";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DotLoader } from "react-spinners";
import React from "react";

const sliderArray = [
  {
    id: 0,
    img: "https://drive.google.com/uc?id=1wh5F43TUQBV1fYn1n2Dx7_hPvXESnqAY",
    hidden: true,
  },
  {
    id: 1,
    img: "https://drive.google.com/uc?id=1Ozj00_dDEYSdcvHNz6H3hhsjf1GXWNVu",
    hidden: true,
  },
  {
    id: 2,
    img: "https://drive.google.com/uc?id=1wPkATDzkMWRd1zLIqLNeZU4gKVycHIkD",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 3,
    img: "https://drive.google.com/uc?id=1GODNgN3fQeZyUrLU7CsG__vWi1xrHbS2",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 4,
    img: "https://drive.google.com/uc?id=1TxCfPsshKGl6He6nZn9mrmqMZnvsOZqj",
    hidden: false,
    heading: "Head 2",
  },
  {
    id: 5,
    img: "https://drive.google.com/uc?id=1wOyH3tnsA02_coVPcKFYFY8pgzHIziEf",
    hidden: false,
    heading: "Head 3",
  },
  {
    id: 6,
    img: "https://drive.google.com/uc?id=1d_EZvqo-7ywHpqi5mIgX4gHcahBsyyFh",
    hidden: false,
    heading: "Head 4",
  },
  {
    id: 7,
    img: "https://drive.google.com/uc?id=1M3q-IdzPw93eK4eBtQ-KR2vzCX7Hqv0K",
    hidden: false,
    heading: "Head 5",
  },
  {
    id: 8,
    img: "https://drive.google.com/uc?id=1QRHVUKYwAgMYwvGy54PRNP3elCnVpg-K",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 9,
    img: "https://drive.google.com/uc?id=1JchJmn7ZWt6I1ZTa9ggSsI8nvj8DJbUB",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 10,
    img: "https://drive.google.com/uc?id=1e5M_bHnysgMAvVNbLKia8lr0hL8lOT00",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 11,
    img: "https://drive.google.com/uc?id=12brPvYN61tgln-4MexkVQ27SZvzyJJvT",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 12,
    img: "https://drive.google.com/uc?id=1VuB8047kdmEOhHvNJzDsSVjyOk4vLpum",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 13,
    img: "https://drive.google.com/uc?id=1wyiUv8dkxjWtIlY2HKfIhAvqvN7RlYfr",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 14,
    img: "https://drive.google.com/uc?id=1a0G8JRpK916MIYcxtd38cxG0igyvls-f",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 15,
    img: "https://drive.google.com/uc?id=1X0TbJ4_tCvz57zrQjdFdsAU8pPRqK447",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 16,
    img: "https://drive.google.com/uc?id=1SHDGAECIzETPlLlwYfJOs7v4p3e7caqM",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 17,
    img: "https://drive.google.com/uc?id=1wOvp6Il6SbSaHERS0sPkUP40EKUjgru-",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 18,
    img: "https://drive.google.com/uc?id=1wG3db3MgOAN0eVn88KPb2yDKV3_oX_9",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 19,
    img: "https://drive.google.com/uc?id=1w9BH9O9Is2qTedvlx-ejipthlzkNRZzi",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 20,
    img: "https://drive.google.com/uc?id=1N5kvmzOeUU5ZxhB_OXkc4A8IDB4zY1IH",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 21,
    img: "https://drive.google.com/uc?id=1uDLXbOmRN9sfV9jxGUYnB2NbxSWHUY-S",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 22,
    img: "https://drive.google.com/uc?id=1wkme0V3PYn2qRnrMcYrkQ9znuUwX1xJR",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 23,
    img: "https://drive.google.com/uc?id=1m71n9iJfpanPKrObOUAx5q-1tyEJG2jl",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 24,
    img: "https://drive.google.com/uc?id=1w82XHkRjDW8j1f3dah0ixodQYueOUsxD",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 25,
    img: "https://drive.google.com/uc?id=1w-aTy40ShNqf4PWWYR5tLv_6Es1b-18H",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 26,
    img: "https://drive.google.com/uc?id=1vwBUndP3616gGOlEAn9LRrNQjJSk9XYL",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 27,
    img: "https://drive.google.com/uc?id=1vr2c9ClUJC83hk9OEkylJymChH9UfBS8",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 28,
    img: "https://drive.google.com/uc?id=1voQUZ2yh6Jl4VOfnOyQN5OIPlMzCo6KS",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 29,
    img: "https://drive.google.com/uc?id=1wKYKlfhE4mNGFoWzQmCBetycNo09w7qX",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 30,
    img: "https://drive.google.com/uc?id=1bNKk94_pNuSpeXz9UONlwLF_9GQrLJ7h",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 31,
    img: "https://drive.google.com/uc?id=1gwO4iaODtb73Ow45wfb44Qn8O-jaUNIp",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 32,
    img: "https://drive.google.com/uc?id=1vgsbDjonDSwtY02dKjE_gXLkquASaXrl",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 33,
    img: "https://drive.google.com/uc?id=1vWNikg9MUaqiDZSfGyacQl8CCykYZrh1",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 34,
    img: "https://drive.google.com/uc?id=1vcL5x6X-fLnxGuRcJOgtw2k0Ga-EtGUs",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 35,
    img: "https://drive.google.com/uc?id=19U2JNK4Wl5xs6j24noHy9XxJdsE5Y8mX",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 36,
    img: "https://drive.google.com/uc?id=1vXEpjqt3dGYAsI_n_OIjhDKi5_k9IX27",
    hidden: false,
    heading: "Head 6",
  },
];

export default function Sponsors() {
  const matches = useMediaQuery("(max-width: 720px)");
  const [loading, setloading] = React.useState(true);
  const [count, setcount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading && (
        <div
          style={{
            backgroundColor: "black",
            height: "100vh",
            position: "fixed",
            width: "100%",
            zIndex: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DotLoader color="white" />
        </div>
      )}
      {/* <div
        style={{
          // height: "200px",
          width: "100%",
          backgroundColor: "red",
          paddingTop: "100px",
          color: "white",
        }}
        className="slider"
      >
       
        
      </div> */}
      <div
        style={{
          height: "400px",
          width: "100%",
          backgroundColor: "black",
          paddingTop: "140px",
          color: "white",
        }}
        className="slider2"
      >
        {matches ? (
          <></>
        ) : (
          <a href={sparshPdf} download="sparsh" className="download-button">
            <div className="download-button-left">Bouchure</div>
            <div className="download-button-right">
              <SouthIcon
                sx={{
                  fontSize: "16px",
                }}
              />
            </div>
          </a>
        )}
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
              width: "220px",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              height: "55px",
              width: "200px",
              backgroundColor: "#15803d",
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
              width: "210px",
              opacity: 0.7,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              height: "55px",
              width: "210px",
              backgroundColor: "#65FFA3",
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
              paddingTop: "8px",
              fontSize: "1.5rem",
            }}
          >
            Previous Sponsors
          </motion.div>
        </div>
        <div
          style={{
            // width: "100%",
            // justifyContent: "space-around",
            position: "absolute",

            display: "flex",
          }}
          className="slide-track2"
        >
          {sliderArray?.map((sA) => (
            <>
              <motion.div key={sA.id} className="slide2">
                {/* <div></div> */}
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "white",
                    opacity: 0.7,
                    height: "100px",
                    width: "100%",
                  }}
                >
                  <img
                    onLoad={() => {
                      setcount(count + 1);
                      console.log(count, "Count");
                      if (count >= 10) {
                        setloading(false);
                      }
                    }}
                    src={sA.img}
                    height="100%"
                    width="100%"
                  ></img>
                </div>
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
          className="slide-track-23"
        >
          {sliderArray?.map((sA) => (
            <>
              <motion.div className="slide">
                {/* <div></div> */}
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "white",
                    opacity: 0.7,
                    height: "100px",
                    width: "100%",
                  }}
                >
                  <img src={sA.img} height="100%" width="100%"></img>
                </div>
              </motion.div>
            </>
          ))}
        </div>
        {matches ? (
          <>
            <a
              href={sparshPdf}
              download="sparsh"
              className="download-button-mobile"
            >
              <div className="download-button-left">Bouchure</div>
              <div className="download-button-right">
                <SouthIcon
                  sx={{
                    fontSize: "16px",
                  }}
                />
              </div>
            </a>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

{
  /* <div
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
              width: "200px",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              height: "55px",
              width: "200px",
              backgroundColor: "#15803d",
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
              width: "190px",
              opacity: 0.7,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              height: "55px",
              width: "190px",
              backgroundColor: "#65FFA3",
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
              paddingTop: "8px",
              fontSize: "1.5rem",
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
                {/* <div></div> */
}
//         <div
//           style={{
//             position: "absolute",
//             backgroundColor: "white",
//             opacity: 0.5,
//             height: "100px",
//             width: "100%",
//           }}
//         ></div>
//         <div>{sA.img}</div>
//       </motion.div>
//     </>
//   ))}
// </div>
// <div
//   style={{
//     // width: "100%",
//     position: "absolute",
//     display: "flex",
//   }}
//   className="slide-track-2"
// >
//   {sliderArray?.map((sA) => (
//     <>
//       <motion.div className="slide">
//         {/* <div></div> */}
//         <div
//           style={{
//             position: "absolute",
//             backgroundColor: "white",
//             opacity: 0.5,
//             height: "100px",
//             width: "100%",
//           }}
//         ></div>
//         <div>{sA.img}</div>
//       </motion.div>
//     </>
//   ))}
// </div> */}
