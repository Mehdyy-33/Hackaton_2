import React from "react";
import "../services/Styles/ToRent.css";
import voiture from "../assets/voiture-1.png";

const ToRent = () => {
  return (
    <div classname="ToRent">
      <div classname="card">
      <img src={voiture} alt="voiture" className="voiture" />

      </div>
    </div>
  );
};

export default ToRent;
