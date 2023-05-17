import React, { Fragment } from "react";
import style from "./Singup.module.css";
import signupImage from "../../assets/signup.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema, submitHandler } from "./FormUtils.js";

function Singup() {
  return (
    <div className={style.container}>
      <div className={style["signup-form-wrapper"]}>
        <h1>SignUp</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form className={style["signup-form"]}>
            <label className={style["upload-photo-label"]} htmlFor="">
              Photo+
            </label>
            <div className={style["form-control"]}>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage
                name="name"
                component="p"
                className={style["error-message"]}
              />
            </div>
            <div className={style["form-control"]}>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" />
              <ErrorMessage
                name="email"
                component="p"
                className={style["error-message"]}
              />
            </div>
            <div className={style["form-control"]}>
              <label htmlFor="phone-no">PhoneNo</label>
              <Field id="phone-no" name="phoneNo" />
              <ErrorMessage
                name="phoneNo"
                component="p"
                className={style["error-message"]}
              />
            </div>
            <div className={style["form-control"]}>
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                className={style["error-message"]}
              />
            </div>
            <div className={style["form-control"]}>
              <label htmlFor="confirm-password">Confirm Password</label>
              <Field
                id="confirm-password"
                name="confirmPassword"
                type="password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className={style["error-message"]}
              />
            </div>

            <div className={style["btn-wrapper"]}>
              <button className={style["btn-submit"]} type="submit">
                Submit
              </button>
              <button className={style["btn-reset"]} type="reset">
                Reset
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className={style["signup-form-image-wrapper"]}>
        <img src={signupImage} alt="" />
      </div>
    </div>
  );
}

export default Singup;
