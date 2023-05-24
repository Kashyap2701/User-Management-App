import React from "react";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuthActions } from "../../store/userAuthSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const logoutHandler = () => {
    dispatch(userAuthActions.logout());
    navigate("/login");
  };
  return (
    <header className={style.navbar}>
      <h2>User App</h2>
      {!isLoggedIn && (
        <div className={style.navitems}>
          <nav>
            <Link to="/login">Login</Link>
          </nav>
          <nav>
            <Link to="/signup">Signup</Link>
          </nav>
          <nav>
            <Link to="/home">Home</Link>
          </nav>
        </div>
      )}
      {isLoggedIn && (
        <nav
          style={{ fontWeight: "bold", fontSize: "larger", cursor: "pointer" }}
          onClick={logoutHandler}
        >
          Logout
        </nav>
      )}
    </header>
  );
}

export default Navbar;
