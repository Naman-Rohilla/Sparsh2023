import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

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

          <Drawer
            anchor={"right"}
            open={state}
            sx={{
              opacity: 0.9,
            }}
            onClose={() => setState(false)}
          >
            <div id="drawer">
              <div className="drawer-header">Logo</div>
              <div className="drawer-links">
                {activeUrl == "/" ? (
                  <div className="nav-item-active">
                    {" "}
                    <HomeIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Home
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      setactiveUrl("/");
                    }}
                    className="nav-item"
                    to="/"
                  >
                    <HomeIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Home
                  </Link>
                )}

                <Link
                  onClick={() => {
                    setState(false);
                    setactiveUrl("/");
                  }}
                  to="/"
                  className="nav-item"
                >
                  <GroupsIcon
                    sx={{
                      paddingRight: "10px",
                    }}
                  />
                  Teams
                </Link>
                <Link
                  onClick={() => {
                    setState(false);
                    setactiveUrl("/");
                  }}
                  to="/"
                  className="nav-item"
                >
                  <SchoolIcon
                    sx={{
                      paddingRight: "10px",
                    }}
                  />
                  Campus Ambassador
                </Link>
                {activeUrl == "/sponsors" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Sponsors
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      setactiveUrl("/sponsors");
                    }}
                    to="/sponsors"
                    className="nav-item"
                  >
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
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
