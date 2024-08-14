import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../App.css";
const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default Main;
