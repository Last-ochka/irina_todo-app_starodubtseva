import React from "react";
import * as myConstClass from "./constans.js";

function Header() {
    return (
        <header>
            <h1>{myConstClass.headerName}</h1>
        </header>
    )
}

export default Header;