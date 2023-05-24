import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userAuthActions } from "../../store/userAuthSlice";
import style from "./Toster.module.css";

function Toster({ errorText }) {
  const dispatch = useDispatch();
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
      dispatch(userAuthActions.resetError());
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return showText && <div className={style.wrapper}>{errorText}</div>;
}

export default Toster;
