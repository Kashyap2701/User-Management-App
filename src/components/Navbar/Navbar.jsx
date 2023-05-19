import React from "react";

function Navbar() {
  return (
    <header className={style.navbar}>
      <h2>User Management App</h2>
      <p
        style={{ fontWeight: "bold", fontSize: "larger", cursor: "pointer" }}
        onClick={logoutHandler}
      >
        Logout
      </p>
    </header>
  );
}

export default Navbar;
