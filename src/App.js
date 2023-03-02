import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import Sponsors from "./pages/aboutUs";
import { Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Sponsors from "./Components/sponsors/sponsors";
import SignIn from "./pages/signIn";
import Register from "./Components/register/register";
import Ca from "./Components/campusAmbassador/Ca";
import EventsPage from "./pages/eventsPage";
import TeamPage from "./pages/teamPage";
import { useEffect } from "react";
import { motion } from "framer-motion";
// import Parallax from "./Components/intro/Components/Parallax";

function App() {
  const [activeUrl, setactiveUrl] = React.useState(window.location.pathname);
  const [startOnce, setstartOnce] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setstartOnce(false);
    }, 6000);
  }, []);

  return (
    <>
      {startOnce == true && (
        <motion.div
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
          <motion.img
            initial="hidden"
            variants={{
              hidden: {
                default: "easeIn",
                // x: -50,
                // opacity: 0,
              },
              visible: {
                default: "easeIn",
                x: 0,
                // opacity: 1,
              },
            }}
            transition={{
              duration: 1,
            }}
            src="./Loading_Sparsh.gif"
          ></motion.img>
        </motion.div>
      )}

      <NavBar activeUrl={activeUrl} setactiveUrl={setactiveUrl} />
      {/* <Parallax /> */}
      <Routes>
        <Route
          path="/"
          element={<Home activeUrl={activeUrl} setactiveUrl={setactiveUrl} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CampusAmbassador" element={<Ca />} />
        <Route path="/teams" element={<TeamPage />} />
      </Routes>
      <Footer activeUrl={activeUrl} setactiveUrl={setactiveUrl} />
    </>
  );
}

export default App;
