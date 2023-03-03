import React, { useEffect, useState } from "react";
import styles from "./register.module.css";
import castyles from "./caCss.module.css";
import TextField from "@mui/material/TextField";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Paper, Stack } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CaRegister = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 786;

  const submitHandler = () => {
    // submit the values
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ pb: 5 }}>
        <div
          className={styles.heading_reg}
          style={{
            paddingTop: "100px",
            fontSize: "3.5vw",
          }}
        >
          REGISTRATION
        </div>
        <div className={styles.heading_reg}>FORM</div>
        <Stack
          sx={{ py: 10 }}
          direction={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems={isMobile && "center"}
          spacing={2}
        >
          <Stack
            direction="column"
            sx={{ width: isMobile ? "80%" : "30%" }}
            spacing={2}
          >
            <TextField fullWidth id="" label="Name" variant="filled" />
            <TextField id="" label="Contact Number" variant="filled" />
            <TextField id="" label="E-Mail" variant="filled" />
            <TextField id="" label="Institute Name" variant="filled" />
            <TextField id="" label="Course" variant="filled" />
            <TextField id="" label="Year of Graduation" variant="filled" />
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ width: isMobile ? "80%" : "30%" }}
          >
            <TextField id="" label="LinkedIn ID" variant="filled" />
            <TextField id="" label="Instagram ID" variant="filled" />
            <TextField id="" label="Facebook ID" variant="filled" />
            <Button
              sx={{ bgcolor: "#5C5C5C", color: "white" }}
              variant="contained"
              component="label"
            >
              UPLOAD COLLEGE ID
              <input type="file" hidden />
            </Button>

            <Button
              sx={{ bgcolor: "#5C5C5C", color: "white" }}
              variant="contained"
              component="label"
            >
              UPLOAD AADHAAR
              <input type="file" hidden />
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Button sx={{ fontSize: "2rem", px: "2rem" }} variant="contained">
            SUBMIT
          </Button>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

export default CaRegister;
