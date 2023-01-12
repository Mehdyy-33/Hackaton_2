import React, { useState } from "react";
import "../Styles/HomePage.css";
import data from "../utils/dataVehicles.js";
import logo from "../assets/logo.png";
import conduite from "../assets/conduite.png";
import gens from "../assets/gens.png";
import filter from "../assets/filter.png";

const HomePage = () => {
  const [showToRent, setShowToRent] = useState(false);
  const [showCarPooling, setshowCarPooling] = useState(true);

  return (
    <div className="home-page">
      <div className="title">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="slogan">
        <p>An eco-responsible transport solution for individuals</p>
      </div>
      <div className="filter-options">
        <div className="filter-button">
          <img src={filter} alt="filtre" />
        </div>
        <div
          className={`filter-option bc-middle-blue ${
            showToRent ? "selected" : ""
          }`}
          onClick={() => {
            setShowToRent(true);
            setshowCarPooling(false);
          }}
        >
          <p>To rent</p>
          <img src={conduite} alt="volant" />
        </div>
        <div
          className={`filter-option bc-violet-blue ${
            showCarPooling ? "selected" : ""
          }`}
          onClick={() => {
            setShowToRent(false);
            setshowCarPooling(true);
          }}
        >
          <p>Car pooling</p>
          <img src={gens} alt="covoiturage" />
        </div>
      </div>
      <div className="content">
        {data.vehicles
          .filter(
            (vehicle) =>
              (vehicle.type === 1 && showCarPooling === true) ||
              (vehicle.type === 2 && showToRent === true)
          )
          .map((vehicle) => (
            <div
              index={vehicle.id}
              className={`card ${
                vehicle.type === 1 ? "bc-violet-blue" : "bc-middle-blue"
              }`}
            >
              <div className="card-content">
                <div className="company-logo">
                  <img src={vehicle.companyLogo} alt="company" />
                </div>
                <div className="vehicle-image">
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
                <div className="vehicle-info">
                  <div className="road-date">
                    <p>06/12/2023</p>
                  </div>
                  <div className="vehicle-name">
                    <p>{vehicle.marque}</p>
                    <p>{vehicle.modele}</p>
                  </div>
                </div>
                <div>
                  <div className="road">
                    <div className="hour">
                      <strong>6h00</strong>
                      <strong>12h30</strong>
                    </div>
                    <div className="road-line"></div>
                    <div className="road-info">
                      <strong>Bordeaux Gare Saint Jean</strong>
                      <p>Durée du trajet : 6h</p>
                      <strong>Aeroport Paris Charles de Gaulle</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="filter-menu">
        <h2>Filter</h2>
        <p>Mon itinéraire</p>
        <div>
          <div className="filter-menu-line">
            <p>Départ</p>
            <input type="text" />
          </div>
          <div className="filter-menu-line">
            <p>Destination</p>
            <input type="text" />
          </div>
          <div className="filter-menu-line">
            <p>Date</p>
            <input type="text" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
