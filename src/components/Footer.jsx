import React from "react";
import * as myConstClass from "./constans.js";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <h6>{myConstClass.FOOTER_NAME}</h6>
    </footer>
  );
}

export default Footer;
