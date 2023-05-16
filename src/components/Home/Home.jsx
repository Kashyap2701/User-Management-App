import React from "react";
import style from "./Home.module.css";
import profilePhoto from "../../assets/profile-photo.jpg";

function Home() {
  return (
    <>
      <header className={style.navbar}>
        <h2>User Management App</h2>
        <a href="">Logout</a>
      </header>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <img
            className={style.profilePhoto}
            src={profilePhoto}
            alt="profile-photo"
          />
        </div>
        <div className={style.profileInfo}>
          <p>
            Hello <span>Kashyap</span>, you are registered with the email id
            <span> kspatel100@gmail.com</span> and phone number
            <span> 9428551650</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
