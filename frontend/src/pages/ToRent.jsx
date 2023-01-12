import React from "react";
import "../services/Styles/ToRent.css";
import voiture from "../assets/voiture-1.png";

function ToRent() {
  return (
    <div className="ToRent">
      <div className="card">
        <img src={voiture} alt="voiture" className="voiture" />
      </div>
    </div>
  );
}

export default ToRent;
