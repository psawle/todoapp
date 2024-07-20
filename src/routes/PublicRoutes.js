import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Login, SignUp, Todo, Dashboard } from "../screens";
import { Protected } from "./ProtectedRoutes";

export const PublicRoutes = () => {
  const currentUserData = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route element={<Protected currentUserData={currentUserData} />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};
