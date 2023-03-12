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

  const [name, setName] = useState(null);
  const [contact_info, setcontact_info] = useState(null);
  const [email, setemail] = useState(null);
  const [institute_name, setinstitute_name] = useState(null);
  const [course, setcourse] = useState(null);
  const [year, setyear] = useState(null);
  const [LinkedIn, setLinkedIn] = useState(null);
  const [instagram, setinstagram] = useState(null);
  const [Facebook, setFacebook] = useState(null);
  const [College_ID_card, setCollege_ID_card] = useState(null);
  const [Aadhar_card, setAadhar_card] = useState(null);

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
    console.log(College_ID_card);

    console.log(name, contact_info, email, institute_name, course, year, LinkedIn, instagram, Facebook, College_ID_card, Aadhar_card);
    let formData = new FormData()
    formData.append('name',name);
    formData.append('contact_info',contact_info);
    formData.append('email',email);
    formData.append('institute_name',institute_name);
    formData.append('course',course);
    formData.append('year',year);
    formData.append('LinkedIn',LinkedIn);
    formData.append('instagram',instagram);
    formData.append('Facebook',Facebook);
    formData.append('Aadhar_card',Aadhar_card);
    formData.append('College_ID_card',College_ID_card);
    fetch('https://sparsh-auth-production.up.railway.app/api/campus_ambassador/register', {
      method: 'POST',
      body: formData,
    })
    .then(res => {
      console.log('sucess')
      window.alert('Registration done')
      window.location.reload(true);
    })
    .catch(err => {
      console.log(err)
      window.alert('Please fill all the required fields (* marked)')
    })

  };
  const handleCollegeId = (e)=>{
    console.log(e.target.files[0]);
    let input = e.target;
    setCollege_ID_card(input.files[0])
  }
  const handleAadhar = (e)=>{
    console.log(e.target.files[0]);
    let input = e.target;
    setAadhar_card(input.files[0])

  }
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
            <TextField fullWidth id="" label="Name" onChange={(e) => setName(e.target.value)} variant="filled" required={true}/>
            <TextField id="" label="Contact Number" onChange={(e) => setcontact_info(e.target.value)} variant="filled" required={true}/>
            <TextField id="" label="E-Mail" onChange={(e) => setemail(e.target.value)} variant="filled" required={true}/>
            <TextField id="" label="Institute Name" onChange={(e) => setinstitute_name(e.target.value)} variant="filled" required={true}/>
            <TextField id="" label="Course" onChange={(e) => setcourse(e.target.value)} variant="filled" required={true}/>
            <TextField id="" label="Year of Graduation" onChange={(e) => setyear(e.target.value)} variant="filled" required={true}/>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ width: isMobile ? "80%" : "30%" }}
          >
            <TextField id="" label="LinkedIn ID" onChange={(e) => setLinkedIn(e.target.value)} variant="filled" />
            <TextField id="" label="Instagram ID" onChange={(e) => setinstagram(e.target.value)} variant="filled" />
            <TextField id="" label="Facebook ID" onChange={(e) => setFacebook(e.target.value)} variant="filled" />
            <Button
              sx={{ bgcolor: "#5C5C5C", color: "white" }}
              variant="contained"
              component="label"
            >
              UPLOAD COLLEGE ID* (under 200kb)

              <input type="file" hidden onChange={handleCollegeId} required={true}/>


            </Button>

            <Button
              sx={{ bgcolor: "#5C5C5C", color: "white" }}
              variant="contained"
              component="label"
            >
              UPLOAD AADHAAR* (under 200kb)

              <input type="file" hidden onChange={handleAadhar} required={true}/>


            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Button sx={{ fontSize: "2rem", px: "2rem" }} onClick={submitHandler} variant="contained">

            SUBMIT
          </Button>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

export default CaRegister;
