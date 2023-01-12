import React from "react";
import "../services/Styles/HomePage.css";
import data from "../utils/dataVehicles.js";
import logo from "../assets/logo.png";
import volant from "../assets/volant.png";
import covoiturage from "../assets/covoiturage.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="title">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="filter-options">
        <div className="filter-option bc-middle-blue">
          <p>To rent</p>
          <img src={volant} alt="volant" />
        </div>
        <div className="filter-option bc-violet-blue">
          <p>Car pooling</p>
          <img src={covoiturage} alt="covoiturage" />
        </div>
      </div>
      <div className="content">
        {data.vehicles.map((vehicle) => (
          <div index={vehicle.id} className="card bc-violet-blue">
            <div className="card-info">
              <img src={vehicle.image} alt={vehicle.name} />
              <div className="vehicle-name">
                <p>{vehicle.marque}</p>
                <p>{vehicle.modele}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
