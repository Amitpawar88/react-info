import React from "react";
import reactLogo from "../react-logo.png"; 
import "../style.css";
function Navbar() {
    return (
        <>
            <nav>
                <img className="nav-icon" src={reactLogo} alt="react-logo" widht="70px" height="70px"/>
                <h3 className="nav-logo_text">ReactFacts</h3>
                <h4 className="nav-title">React Course - Project 1</h4>
            </nav>
        </>
    )
}

export default Navbar;