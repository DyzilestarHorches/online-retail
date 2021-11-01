import React from "react";
import logo from "./asset/amazon-logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="./">
          <img src={logo} />
        </a>
      </div>
      <div className="header-option">
        <span className="head-opt-1st-line">Deliver to</span>
        <span className="head-opt-2st-line">Vietnam</span>
      </div>
      <div className="search-box">
        <input type="text"></input>
        <div className="search-container">
          <SearchIcon className="submit-search" />
        </div>
      </div>
      <div className="header-option">
        <span className="head-opt-1st-line">Deliver to</span>
        <span className="head-opt-2st-line">Vietnam</span>
      </div>
      <div className="header-option">
        <span className="head-opt-1st-line">Deliver to</span>
        <span className="head-opt-2st-line">Vietnam</span>
      </div>
      <div className="header-option">
        <span className="head-opt-1st-line">Deliver to</span>
        <span className="head-opt-2st-line">Vietnam</span>
      </div>
    </header>
  );
}

export default Header;
