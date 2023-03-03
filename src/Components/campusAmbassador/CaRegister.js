import React from "react";
import styles from "./register.module.css";
import castyles from "./caCss.module.css";

const CaRegister = () => {
  const submitHandler = () => {
    // submit the values
  };
  return (
    <form
      className={styles.register_ca}
      action="https://sparsh-auth-production.up.railway.app/api/campus_ambassador/register"
      method="post"
      enctype="multipart/form-data"
    >
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

      <div className="row" style={{ padding: "110px 7% 100px" }}>
        <div className="col-lg-6 col-sm-12">
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="Name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div
            className={styles.inputs}
            style={{
              background: "#261c29",
              borderRadius: "5px",

              lineHeight: "45px",
              display: "flex",
              alignItems: "center",
              marginTop: "25px",

              color: "rgba(255, 255, 255, 0.4)",
              marginLeft: "10px",
              alignItems: "center",
            }}
          >
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="Contact_Number"
              name="contact_info"
              placeholder="Contact Number"
            />
          </div>
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="email"
              id="E_mail"
              name="email"
              placeholder="E-Mail"
            />
          </div>
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="Institute_name"
              name="institute_name"
              placeholder="Institute Name"
            />
          </div>
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="course"
              name="course"
              placeholder="Course"
            />
          </div>
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="Year_Graduation"
              name="year"
              placeholder="Year of Graduation"
            />
          </div>
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="department"
              name="department"
              placeholder="Department"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="LinkedIn_ID"
              name="LinkedIn"
              placeholder="LinkedIn ID"
            />
          </div>
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="Instagram_ID"
              name="instagram"
              placeholder="Instagram ID"
            />
          </div>
          <div className={styles.inputs}>
            {" "}
            <input
              className={styles.form__input}
              type="text"
              id="Facebook_ID"
              name="Facebook"
              placeholder="Facebook ID"
            />
          </div>

          <div className={styles.inputs}>
            {" "}
            <textarea
              className={styles.form__input}
              id="Why_do_you_want_to_be_campus_ambassadors"
              name="Why_do_you_want_to_be_campus_ambassadors"
              placeholder="Why_do_you_want_to_be_campus_ambassadors"
            ></textarea>
          </div>

          <div
            className={`${styles.row} ${styles.inputs} ${styles.row_submit}`}
            style={{ color: "#adcee8" }}
          >
            <div className="col-9">
              {" "}
              <fieldset>
                <legend style={{ paddingLeft: "10px" }}>College ID</legend>
                <input
                  className={styles.form__input}
                  style={{ backgroundColor: "#00000000", color: "#adcee8" }}
                  type="file"
                  id="College_ID"
                  name="College_ID_card"
                  placeholder="College ID"
                />
              </fieldset>
            </div>
          </div>

          <div
            className={`${styles.row} ${styles.inputs} ${styles.row_submit}`}
            style={{ color: "#adcee8" }}
          >
            <div className="col-9">
              {" "}
              <fieldset>
                <legend style={{ padding: "5px" }}>Aadhar Card</legend>
                <input
                  className={styles.form__input}
                  style={{ backgroundColor: "#00000000", color: "#adcee8" }}
                  type="file"
                  id="Aadhar"
                  name="Aadhar_card"
                  placeholder="Aadhar"
                />
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className={castyles.center}>
        <div className={`${styles.submit} col-4`}>
          <button className={styles.submitb} onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CaRegister;
