import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <div
        style={{
          height: "100px",
          width: "100%",
          zIndex: 1,
          position: "absolute",
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100%",
            zIndex: 2,
            // backgroundColor: "transparent",
            position: "absolute",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "200px",
              display: "flex",
              zIndex: 2,
              // justifyContent: "center",
              paddingLeft: "20px",
              alignItems: "center",
              // backgroundColor: "green"
            }}
          >
            <div
              style={{
                padding: "10px",
              }}
            >
              Logo
            </div>
          </div>
          <div
            style={{
              height: "100%",
              display: "grid",
              paddingRight: "20px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "30px 20px",
              // backgroundColor: "green",
              // paddingTop: "50px"
              alignContent: "space-evenly",
              fontSize: "2px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                Home
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/about">
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                About
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                Contact
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/sponsors">
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                Sponsors
              </Button>
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
