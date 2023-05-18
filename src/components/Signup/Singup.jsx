import React, { Fragment, useState } from "react";
import style from "./Singup.module.css";
import noUser from "../../assets/no-profile.png";
import signupImage from "../../assets/signup.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./FormUtils.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAuthActions } from "../../store/userAuthSlice";

function Singup() {
  const [previewImage, setPreviewImage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    console.log(values);
    dispatch(userAuthActions.signup({ ...values, profilePhoto: previewImage }));
    navigate("/home");
  };

  const handlePreviewImage = (e) => {
    let reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setPreviewImage(e.target.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className={style.container}>
      <div className={style["signup-form-wrapper"]}>
        <h1>SignUp</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {({ values, setFieldValue }) => (
            <Form className={style["signup-form"]}>
              <div className={style["form-control"]}>
                <label
                  htmlFor="profilePhoto"
                  className={style["upload-photo-label"]}
                >
                  <div className={style["preview-wrapper"]}>
                    <span>
                      {values.profilePhoto
                        ? values.profilePhoto.name
                        : `Photo+`}
                    </span>
                    <img
                      src={previewImage || noUser}
                      alt=""
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </div>
                </label>
                <Field
                  id="profilePhoto"
                  name="profilePhoto"
                  value={undefined}
                  onChange={(e) => {
                    setFieldValue("profilePhoto", e.target.files[0]);
                    handlePreviewImage(e);
                  }}
                  type="file"
                  hidden
                />
                <ErrorMessage
                  name="profilePhoto"
                  component="p"
                  className={style["error-message"]}
                />
              </div>

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
                <button
                  className={style["btn-reset"]}
                  type="reset"
                  onClick={() => setPreviewImage(null)}
                >
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={style["signup-form-image-wrapper"]}>
        <img src={signupImage} alt="" />
      </div>
    </div>
  );
}

export default Singup;
