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
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar(data) {
  const [state, setState] = React.useState(false);

  return (
    <>
      <div id="main">
        <div className="left-container">
          <Link
            onClick={() => data.setactiveUrl("/")}
            to="/"
            className="left-container-child"
          >
            <img
              className="left-container-child-nav-logo"
              src="./sparsh_logo_top.png"
            ></img>
          </Link>
        </div>
        <div className="right-container">
          <div className="right-container-child">
            {data.activeUrl == "/" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Home
              </div>
            ) : (
              <Link
                onClick={() => data.setactiveUrl("/")}
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

            {data.activeUrl == "/events" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Events
              </div>
            ) : (
              <Link
                onClick={() => data.setactiveUrl("/events")}
                to="/events"
                className="nav-item"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Events
              </Link>
            )}
            {data.activeUrl == "/sponsors" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sponsors
              </div>
            ) : (
              <Link
                onClick={() => data.setactiveUrl("/sponsors")}
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
            {data.activeUrl == "/CampusAmbassador" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Campus Ambassador
              </div>
            ) : (
              <Link
                onClick={() => data.setactiveUrl("/CampusAmbassador")}
                to="/CampusAmbassador"
                className="nav-item"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Campus Ambassador
              </Link>
            )}
            {data.activeUrl == "/teams" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Teams
              </div>
            ) : (
              <Link
                onClick={() => data.setactiveUrl("/teams")}
                to="/teams"
                className="nav-item"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Teams
              </Link>
            )}
            {/* {data.activeUrl == "/sign-in" ? (
              <div className="nav-item-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </div>
            ) : (
              <Link
                onClick={() => data.setactiveUrl("/sign-in")}
                to="/sign-in"
                className="nav-item"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </Link>
            )} */}
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
                {data.activeUrl == "/" ? (
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
                      data.setactiveUrl("/");
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
                {data.activeUrl == "/events" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Events
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/events");
                    }}
                    to="/events"
                    className="nav-item"
                  >
                    <GroupsIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Events
                  </Link>
                )}
                {data.activeUrl == "/teams" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Teams
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/teams");
                    }}
                    to="/teams"
                    className="nav-item"
                  >
                    <GroupsIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Teams
                  </Link>
                )}

                {data.activeUrl == "/CampusAmbassador" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Campus Ambassador
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/CampusAmbassador");
                    }}
                    to="/CampusAmbassador"
                    className="nav-item"
                  >
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Campus Ambassador
                  </Link>
                )}
                {data.activeUrl == "/sponsors" ? (
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
                      data.setactiveUrl("/sponsors");
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
                {/* {data.activeUrl == "/sign-in" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Sign In
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/sign-in");
                    }}
                    to="/sign-in"
                    className="nav-item"
                  >
                    <PersonIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Sign In
                  </Link>
                )} */}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
