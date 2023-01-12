import React from "react";
import "../App.css";
import "../services/Styles/navbar.css";

function Navbar() {
  return (
    <div className="smartfleetlogoblue">
      <img className="logoheight"
        src="../src/assets/images/Logo-smartfleetbleu2.png"
        alt="smartfleetlogo"
      />
    <div className="navbarmenu">My trips</div>
    </div>
  );
}

export default Navbar;
