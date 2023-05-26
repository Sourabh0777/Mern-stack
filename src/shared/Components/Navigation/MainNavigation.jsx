import React from "react";
import "./MainNavigation.jsx";
import MainHeader from "./MainHeader.jsx";
import { Link } from "react-router-dom";
const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-naviagtion__menu_btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title"><Link to="/">Your Places</Link>
      <nav>
        ...
        ...
        ...
      </nav>

      </h1>
    </MainHeader>
  );
};

export default MainNavigation;
