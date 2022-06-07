import React from "react";
import * as myConstClass from "./constans.js";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>{myConstClass.HEADER_NAME}</h1>
    </header>
  );
}

export default Header;
