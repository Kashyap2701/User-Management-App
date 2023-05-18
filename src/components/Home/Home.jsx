import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import profilePhoto from "../../assets/profile-photo.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuthActions } from "../../store/userAuthSlice";
function Home() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log("adas");
    dispatch(userAuthActions.logout());
  };

  return (
    <>
      <header className={style.navbar}>
        <h2>User Management App</h2>
        <Link to="/signup" onClick={logoutHandler}>
          Logout
        </Link>
      </header>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <img
            className={style.profilePhoto}
            src={user.profilePhoto}
            alt="profile-photo"
          />
        </div>
        <div className={style.profileInfo}>
          <p>
            Hello <span>{user.name}</span>, you are registered with the email id
            <span> {user.email}</span> and phone number
            <span> {user.phoneNo}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
