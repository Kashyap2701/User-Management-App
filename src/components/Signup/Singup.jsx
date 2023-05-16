import React, { Fragment } from "react";
import style from "./Singup.module.css";
import signupImage from "../../assets/signup.png";

function Singup() {
  return (
    <div className={style.container}>
      <div className={style["signup-form-wrapper"]}>
        <h1>SignUp</h1>
        <form className={style["signup-form"]}>
          <label className={style["upload-photo-label"]} htmlFor="">
            Photo+
          </label>
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="email">Email</label>
          <input type="email" />
          <label htmlFor="phone-no">PhoneNo</label>
          <input type="number" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" />
          <div className={style["btn-wrapper"]}>
            <button className={style["btn-submit"]} type="submit">
              Submit
            </button>
            <button className={style["btn-reset"]} type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className={style["signup-form-image-wrapper"]}>
        <img src={signupImage} alt="" />
      </div>
    </div>
  );
}

export default Singup;
