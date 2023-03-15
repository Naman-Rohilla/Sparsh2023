import "./register.css";

export default function Register() {
  return (
    <>
      <div id="main-register">
        <form name="Form" id="part-1">
          <fieldset className="fieldset">
            <legend> Team Information </legend>
            <div className="flex-container">
              <div className="flex-2">
                <div>
                  <label htmlFor="tname">Team name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="tname"
                    placeholder="Eg. Smashers"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2" id="team">
                <div>
                  <label htmlFor="cat">Category</label>
                </div>
                <div>
                  <select name="" id="cat">
                    <option value="1">Single</option>
                    <option value="2">Duo</option>
                    <option value="3">Group</option>
                    <option value="4">Departmental</option>
                    <option value="5">Street Dance</option>
                  </select>
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="name">Leader's name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Eg. Ram Verma"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="num">Phone number</label>
                </div>

                <div>
                  <input
                    type="tel"
                    name="num"
                    placeholder="Eg. 1234567890"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="num">Alternate phone number</label>
                </div>

                <div>
                  <input
                    type="tel"
                    name="num"
                    placeholder="Eg. 1234567890"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="mail">E-mail Address</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="mail"
                    placeholder="Eg. u20cs004@coed.svnit.ac.in"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="iname">Institute Name</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="iname"
                    placeholder="Eg. SVNIT"
                    className="in"
                  />
                </div>
              </div>
              {/* <div className='flex-2'>
                                <div>
                                    <label htmlFor="cname">Course Enrolled</label>
                                </div>

                                <div>
                                    <input type="text" name="cname" placeholder="Eg. Computer Engineering" className="in" />
                                </div>
                            </div> */}
              <div className="flex-2">
                <div>
                  <label htmlFor="year">College Year</label>
                </div>

                <div>
                  <select name="year">
                    <option value="1">I</option>
                    <option value="2">II</option>
                    <option value="3">III</option>
                    <option value="4">IV</option>
                    <option value="5">V</option>
                  </select>
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="">Gender</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="Male"
                    value="Male"
                    className="in"
                  />
                  <label htmlFor="Male"> Male </label>

                  <input
                    type="radio"
                    name="gender"
                    id="Female"
                    value="Female"
                    className="in"
                  />
                  <label htmlFor="Female"> Female </label>

                  {/* <input type="radio" name="gender" id="Other" value="Other" className="in"/>
                                    <label htmlFor="Other">Other </label> */}
                </div>
              </div>
              {/* <div className="flex-2">
                <div>
                  <label htmlFor="photo">Payment proof</label>
                </div>

                <div>
                  <input type="file" name="photo" id="photo" className="in" />
                </div>
              </div> */}
              {/* <div className='flex-2'>
                                <div>
                                    <label htmlFor="cid">College ID</label>
                                </div>

                                <div>
                                    <input type="file" name="cid" id="cid" className="in"/>
                                </div>
                            </div> */}
            </div>
          </fieldset>
          <div id="imp">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <span>
                <p>
                  It is mandatory that all team members bring their College ID
                  Card for verification at the event.
                </p>
              </span>
              <span>
                <p>
                  SVNIT Students are requested to kindly use their college email
                  id for registeration.
                </p>
              </span>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </div>
        </form>
        <div id="part-2">
          <img
            className="poster"
            src="./event_dance.png"
            alt="Sample"
          />
        </div>
      </div>
    </>
  );
}
