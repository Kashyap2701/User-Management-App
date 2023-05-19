import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./LoginFormUtils.js";
import { useDispatch, useSelector } from "react-redux";
import { userAuthActions } from "../../store/userAuthSlice";
import { Link, useNavigate } from "react-router-dom";
import Toster from "../Toaster/Toster";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  const isError = useSelector((state) => state.user.hasError);
  const loginError = useSelector((state) => state.user.loginError);

  const submitHandler = (values) => {
    dispatch(userAuthActions.login(values));
  };

  useEffect(() => {
    if (isLoggedin) {
      navigate("/home");
    }
  }, [isLoggedin]);

  return (
    <>
      {isError && <Toster errorText={loginError} />}
      <div className={style.container}>
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form className={style["login-form-wrapper"]}>
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
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                className={style["error-message"]}
              />
            </div>
            <button type="submit" className={style["btn-login"]}>
              Login
            </button>
          </Form>
        </Formik>
        <p className={style["login-footer"]}>
          Don't Have Account <Link to="/signup">Click Here</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
