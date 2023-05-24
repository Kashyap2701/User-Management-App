import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import profilePhoto from "../../assets/profile-photo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
function Home() {
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Navbar />
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
