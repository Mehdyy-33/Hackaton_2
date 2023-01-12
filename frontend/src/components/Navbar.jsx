import React from "react";

import "../assets/css/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="smartfleetlogoblue">
      <img
        className="logoheight"
        src="../src/assets/images/Logo-smartfleetbleu2.png"
        alt="smartfleetlogo"
      />
      <div className="header-select">
        <div className="navbarmenu">My trips</div>
        {isOpen && (
          <div>
            <ul className="menuicon">
              <li> Connexion</li>
              <li>Register</li>
            </ul>
          </div>
        )}
      </div>

      <img
        onClick={() => setIsOpen(!isOpen)}
        className="usericon"
        src="../src/assets/images/usericon.png"
        alt="usericon"
      />
    </div>
  );
}

export default Navbar;
