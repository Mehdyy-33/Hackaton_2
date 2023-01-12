import React from "react";

import "../services/Styles/navbar.css";

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
              <li>Connexion &nbsp; &nbsp;></li>
              <li>Register &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;></li>
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
