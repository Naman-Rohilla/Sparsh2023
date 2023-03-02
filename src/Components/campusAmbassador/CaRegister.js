import React from "react";
import "./register.css";

const CaRegister = () => {
  const submitHandler = ()=>{
    // submit the values
  }
  return (
    <form action="https://sparsh-auth-production.up.railway.app/api/campus_ambassador/register" method="post" enctype="multipart/form-data">
      <div className="heading_reg heading_small">REGISTRATION</div>
      <div className="heading_reg">FORM</div>

      <div className="row form_row">
        <div className="col-lg-6 col-sm-12">
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Contact_Number"
              name="contact_info"
              placeholder="Contact Number"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="email"
              id="E_mail"
              name="email"
              placeholder="E-Mail"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Institute_name"
              name="institute_name"
              placeholder="Institute Name"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="course"
              name="course"
              placeholder="Course"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Year_Graduation"
              name="year"
              placeholder="Year of Graduation"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="department"
              name="department"
              placeholder="Department"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="LinkedIn_ID"
              name="LinkedIn"
              placeholder="LinkedIn ID"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Instagram_ID"
              name="instagram"
              placeholder="Instagram ID"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Facebook_ID"
              name="Facebook"
              placeholder="Facebook ID"
            />
          </div>

          <div className="inputs">
            {" "}
            <textarea 
              className="form__input"
              id="Why_do_you_want_to_be_campus_ambassadors"
              name="Why_do_you_want_to_be_campus_ambassadors"
              placeholder="Why_do_you_want_to_be_campus_ambassadors"
            >
            </textarea>
          </div>

          <div className="row inputs row_submit">
            <div className="col-9">
              {" "}
              <fieldset>
                <legend>College ID</legend>
                <input
                className="form__input"
                type="file"
                id="College_ID"
                name="College_ID_card"
                placeholder="College ID"
              />
              </fieldset>
            </div>
          </div>

          <div className="row inputs row_submit">
            <div className="col-9">
              {" "}
              <fieldset>
                <legend>Aadhar Card</legend>
                <input
                className="form__input"
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

      <div className="center">
      <div className="submit col-4">
        <button className="submitb" onClick={submitHandler}>Submit</button>
      </div>
      </div>
    </form>
  );
};

export default CaRegister;
