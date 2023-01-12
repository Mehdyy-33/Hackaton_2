import React from "react";
// import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import "../services/Styles/MyTrips.css";
import conduite from "../assets/conduite.png";
import gens from "../assets/gens.png";
// import dataPastTrips from "../utils/pastTrips";
import dataTripsUpcoming from "../utils/upcomingTrips";

function MyTrips() {
  return (
    <div className="home-page">
      <div className="title">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="trip-slogan">
        <p>An eco-responsible transport solution for individuals</p>
      </div>
      <div className="filter-options">
        <div className="filter-option bc-middle-blue">
          <p>UPCOMING</p>
          <img src={conduite} alt="upcoming" />
        </div>
        <div className="filter-option bc-violet-blue">
          <p>PAST</p>
          <img src={gens} alt="past" />
        </div>
      </div>
      <div className="my-trips">
        <h1>My trips</h1>
      </div>
      <div className="content-upcomming-trips">
        {dataTripsUpcoming.vehicles.map((vehicle) => (
          <div index={vehicle.id} className="card bc-violet-blue">
            <img src={vehicle.image} alt={vehicle.name} />
            <div className="vehicle-info">
              <div className="road-date">
                <p>{vehicle.date}</p>
              </div>
              <div className="vehicle-name">
                <p>{vehicle.marque}</p>
                <p>{vehicle.car}</p>
              </div>
            </div>
            <div>
              <div className="road">
                <div className="hour">
                  <strong>{vehicle.time}</strong>
                </div>
                <div className="road-line" />
                <div className="road-info">
                  <strong>{vehicle.departure}</strong>
                  <strong>{vehicle.destination}</strong>
                  <strong>{vehicle.price}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    //    <div className="content-past-trips">
    //    {dataPastTrips.vehicles.map((vehicle) => (
    //      <div index={vehicle.id} className="card bc-violet-blue">
    //        <img src={vehicle.image} alt={vehicle.name} />
    //        <div className="vehicle-info">
    //          <div className="road-date">
    //            <p>{vehicle.date}</p>
    //          </div>
    //          <div className="vehicle-name">
    //            <p>{vehicle.marque}</p>
    //            <p>{vehicle.car}</p>
    //          </div>
    //        </div>
    //        <div>
    //          <div className="road">
    //            <div className="hour">
    //              <strong>{vehicle.time}</strong>
    //            </div>
    //            <div className="road-line" />
    //            <div className="road-info">
    //              <strong>{vehicle.departure}</strong>
    //              <strong>{vehicle.destination}</strong>
    //              <strong>{vehicle.price}</strong>
    //            </div>
    //          </div>
    //        </div>
    //      </div>
    //    ))}
    //  </div>
    //  </div>
  );
}

export default MyTrips;
