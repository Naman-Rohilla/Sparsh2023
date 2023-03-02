import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer(data) {
  return (
    <>
      <div id="main-footer">
        <motion.div
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              x: -120,
              position: "absolute",
              default: "easeIn",
            },
            visible: {
              opacity: 1,
              x: 0,
              position: "relative",
              default: "easeIn",
            },
          }}
          whileInView="visible"
          transition={{
            duration: "2",
          }}
          className="footer-left-container"
        >
          <span className="sparsh">
            <img src="./Sparsh_Theme_Logo.png" height="100%" width="100%"></img>
          </span>
        </motion.div>
        <div className="footer-right-container">
          <div className="footer-right-container-child">
            <div className="footer-right-container-child-childrens">
              <span>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    data.setactiveUrl("/CampusAmbassador");
                  }}
                  to="/CampusAmbassador"
                >
                  Campus Ambassador
                </Link>
              </span>
              <span>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    data.setactiveUrl("/teams");
                  }}
                  to="/teams"
                >
                  Teams
                </Link>
              </span>
              <span>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to="https://www.sparshsvnit.in/"
                >
                  Sparsh2K22
                </Link>
              </span>
              <span>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    data.setactiveUrl("/events");
                  }}
                  to="/events"
                >
                  Events
                </Link>
              </span>
            </div>
          </div>
          <div className="footer-right-container-child2">
            <div className="footer-right-container-child2-childrens">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="https://instagram.com/sparsh.nitsurat?igshid=YmMyMTA2M2Y="
              >
                <InstagramIcon />
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="https://www.facebook.com/Sparsh.NITsurat/?mibextid=ZbWKwL"
              >
                <FacebookIcon />
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="https://youtu.be/_LtDjW8Hmlk"
              >
                <YouTubeIcon />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
