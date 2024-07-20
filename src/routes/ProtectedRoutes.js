import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Protected = ({ currentUserData }) => {
  return currentUserData ? <Outlet /> : <Navigate to="/" />;
}
