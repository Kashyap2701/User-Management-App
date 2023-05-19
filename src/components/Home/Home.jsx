import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import profilePhoto from "../../assets/profile-photo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuthActions } from "../../store/userAuthSlice";
function Home() {
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userAuthActions.logout());
    navigate("/login");
  };

  return (
    <>
      <header className={style.navbar}>
        <h2>User Management App</h2>
        <p
          style={{ fontWeight: "bold", fontSize: "larger", cursor: "pointer" }}
          onClick={logoutHandler}
        >
          Logout
        </p>
        {/* <Link to="/login">Logout</Link> */}
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
