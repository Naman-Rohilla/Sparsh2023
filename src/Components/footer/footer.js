import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "100%",
          backgroundColor: "black",
          display: "flex",
        }}
      >
        <motion.div
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              x: 120,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          whileInView="visible"
          transition={{
            duration: "2",
          }}
          style={{
            display: "flex",
            width: "40%",
            height: "100%",
            // backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "10rem",
          }}
        >
          <span className="sparsh">Sparsh</span>
        </motion.div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            height: "100%",
            // backgroundColor: "yellow",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "70%",
              // backgroundColor: "blue",
              borderBottom: "solid white",
              // margin: "0px 20px 0px 20px"
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                height: "40%",
                width: "100%",
                // backgroundColor: "yellow",
                color: "white",
                marginBottom: "10px",
                fontSize: "1.2rem",
              }}
            >
              <span>About us</span>
              <span>Campus Ambassador</span>
              <span>Our Sponsors</span>
              <span>Contact US</span>
            </div>
          </div>
          <div
            style={{
              height: "30%",
              width: "80%",
              //   backgroundColor: "blue",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                paddingTop: "25px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 40,
                color: "#FF5F01",
              }}
            >
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
