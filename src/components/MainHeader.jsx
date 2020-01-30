import React from "react";
import Link from "gatsby-link";
import MainNav from "../components/MainNav";
import Avatar from "../components/Avatar";

const MainHeader = props => (
  <header className="c-main-header">
    <Link to="/" className="c-main-header__logo">
      <p className="logo-name">Kien Dang</p>
    </Link>
    <div className="c-main-header__nav">
      <MainNav />
    </div>
  </header>
);

export default MainHeader;
