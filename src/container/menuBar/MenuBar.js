import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./menuBarStyle.css";

export const MenuBar = () => {
  const navigate = useNavigate();
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const loginFunction = () => {
    navigate("/");
  };

  const logoutFunction = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="link-items">
        <Link className="link-item" to="/home">
          Home
        </Link>
        {!currentUser &&  <Link className="link-item" to="/signup"> SignUp </Link>}
        {currentUser && <Link className="link-item" to="/dashboard">Dashboard </Link>}
        {!currentUser ? (
          <button className="loginBtn" onClick={loginFunction}>
            Login
          </button>
        ) : (
          <button className="loginBtn" onClick={logoutFunction}>
            Logout
          </button>
        )}
      </div>
    </>
  );
};
