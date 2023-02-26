import React from "react";
import "./logIn.css";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import { width } from "@mui/system";

const CssTextField = styled(TextField)({
  marginBottom: "20px",
  width: "70%",
  color: "#db2777",
  "& label.Mui-focused": {
    color: "#fe019a",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fe019a",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

export default function LogIn() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  function handleChange() {
    console.log(email);
    console.log(password);
    resetHandle();
  }

  function resetHandle() {
    setemail("");
    setpassword("");
  }

  return (
    <div id="main-login">
      <motion.div
        initial={{
          opacity: 0,
          y: 120,
          width: "0%",
        }}
        animate={{
          opacity: 1,
          y: 0,
          width: "100%",
        }}
        exit={{
          opacity: 0,
          width: "0px",
        }}
        transition={{
          duration: 0.5,
        }}
        className="login-container"
      >
        <div className="login-container-left">
          
          <span className="header">Header</span>
          <CssTextField
            id="standard-basic"
            label="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="text"
            // autoComplete="current-password"
            variant="standard"
          />
          <CssTextField
            id="standard-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            // autoComplete="current-password"
            variant="standard"
          />
          <div onClick={() => handleChange()} className="sign-in-button">
            <motion.div
              initial={{
                width: "0px",
                opacity: 0,
              }}
              animate={{
                width: "110px",
                opacity: 1,
              }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#be185d",
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
                width: "100px",
                opacity: 0.7,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#db2777",
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
                paddingTop: "2px",
                fontSize: "16px",
                color: "white",
              }}
            >
              Sign In
            </motion.div>
          </div>
        </div>
        <div className="login-container-right">
          <img
            style={{
              position: "absolute",
              width: "40%",
              height: "60%",
            }}
            src="./main_1.gif"
          ></img>
        </div>
      </motion.div>
    </div>
  );
}
