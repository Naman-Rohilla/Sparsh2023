import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div
        style={{
          height: "100px",
          width: "100%",
          zIndex: 100,
          position: "absolute",
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100%",
            zIndex: 100,
            backgroundColor: "transparent",
            // textColor: "white",
            position: "absolute",
            color: "white",
            // boxShadow: "0px 2px 10px gray",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "200px",
              display: "flex",
              zIndex: 100,
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
            <Link style={{ textDecoration: 'none' }} to="/" >
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
            <Link style={{ textDecoration: 'none' }}  >
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
            <Link style={{ textDecoration: 'none' }} >
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
            <Link style={{ textDecoration: 'none' }} to="/sponsors" >
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
