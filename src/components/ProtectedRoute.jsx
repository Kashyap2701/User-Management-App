import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ Component }) {
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedin) navigate("/singup");
    setAuth(true);
  }, []);
  return auth && <Component />;
}

export default ProtectedRoute;
