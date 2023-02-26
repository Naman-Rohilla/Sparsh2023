import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

export default function NavBar() {
  const [state, setState] = React.useState(false);
  const [activeUrl, setactiveUrl] = React.useState(window.location.pathname);
  return (
    <>
      <div id="main">
        <div className="left-container">
          <div className="left-container-child">Logo</div>
        </div>
        <div className="right-container">
          <div className="right-container-child">
            {activeUrl == "/" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Home
              </div>
            ) : (
              <Link
                onClick={() => setactiveUrl("/")}
                className="nav-item"
                to="/"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Home
              </Link>
            )}
            {activeUrl == "/about" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About Us
              </div>
            ) : (
              <Link
                onClick={() => setactiveUrl("/about")}
                to="/about"
                className="nav-item"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About Us
              </Link>
            )}
            
            <Link onClick={() => setactiveUrl("/")} to="/" className="nav-item">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Teams
            </Link>
            {activeUrl == "/sponsors" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sponsors
              </div>
            ) : (
              <Link
                onClick={() => setactiveUrl("/sponsors")}
                to="/sponsors"
                className="nav-item"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sponsors
              </Link>
            )}
            {activeUrl == "/sign-in" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </div>
            ) : (
              <Link
                onClick={() => setactiveUrl("/sign-in")}
                to="/sign-in"
                className="nav-item"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </Link>
            )}
          </div>
          <div className="right-container-hamburger">
            <MenuIcon onClick={() => setState(true)} />
          </div>

          <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
            <div id="drawer">
              <div className="drawer-header">sparsh</div>
              <div className="drawer-links">
                {activeUrl == "/" ? (
                  <div className="nav-item-active">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Home
                  </div>
                ) : (
                  <Link
                    onClick={() => setactiveUrl("/")}
                    className="nav-item"
                    to="/"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Home
                  </Link>
                )}
                {activeUrl == "/about" ? (
                  <div className="nav-item-active">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About Us
                  </div>
                ) : (
                  <Link
                    onClick={() => setactiveUrl("/about")}
                    to="/about"
                    className="nav-item"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About Us
                  </Link>
                )}
                <Link
                  onClick={() => setactiveUrl("/")}
                  to="/"
                  className="nav-item"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Campus Ambassador
                </Link>
                {activeUrl == "/sponsors" ? (
                  <div className="nav-item-active">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sponsors
                  </div>
                ) : (
                  <Link
                    onClick={() => setactiveUrl("/sponsors")}
                    to="/sponsors"
                    className="nav-item"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sponsors
                  </Link>
                )}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
