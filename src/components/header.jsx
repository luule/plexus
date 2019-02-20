import React from "react";
import logo from "../plexuslogo.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} className="App-logo" alt="logo" width="150" />
      </a>
    </nav>
  );
};

export default Header;
