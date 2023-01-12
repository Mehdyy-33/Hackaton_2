import React from "react";
import "../services/Styles/HomePage.css";
import data from "../utils/dataVehicles";
import logo from "../assets/logo.png";
import conduite from "../assets/conduite.png";
import gens from "../assets/gens.png";

function HomePage() {
  return (
    <div className="home-page">
      <div className="title">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="slogan">
        <p>An eco-responsible transport solution for individuals</p>
      </div>
      <div className="filter-options">
        <div className="filter-option bc-middle-blue">
          <p>To rent</p>
          <img src={conduite} alt="volant" />
        </div>
        <div className="filter-option bc-violet-blue">
          <p>Car pooling</p>
          <img src={gens} alt="covoiturage" />
        </div>
      </div>
      <div className="content">
        {data.vehicles.map((vehicle) => (
          <div index={vehicle.id} className="card bc-violet-blue">
            <img src={vehicle.image} alt={vehicle.name} />
            <div className="company-logo">
              <img src={vehicle.companyLogo} alt="company" />
            </div>
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="vehicle-image"
            />
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
                <div className="road-line" />
                <div className="road-info">
                  <strong>Bordeaux Gare Saint Jean</strong>
                  <p>Durée du trajet : 6h</p>
                  <strong>Aeroport Paris Charles de Gaulle</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
