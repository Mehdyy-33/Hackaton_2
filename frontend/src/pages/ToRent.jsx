import React from "react";
import "../services/Styles/ToRent.css";
import voiture from "../assets/voiture-1.png";
import option from "../assets/images/option.png";

function ToRent() {
  return (
    <div className="ToRent">
      <div className="card">
        <div className="block-1">
          <img src={voiture} alt="voiture" className="voiture" />
          <h1 className="model">Peugeot 208</h1>
          <img src={option} alt="option" className="option" />
          <p>Véhicule proposé par la société Ubisoft</p>
        </div>
        <div className="block-2">
          <p>Départ</p>
          <p>Bordeaux Aéroport</p>
          <p>13.01.2023 à 12:00 heures</p>
          <br />
          <br />
          <p>Retour</p>
          <p>Bordeaux Gare Saint-Jean TGV </p>
          <p>16.01.2023 à 09:00 heures </p>
          <br />
          <br />
          <p>Période de location</p>
          <p>3 jours </p>
          <br />
          <br />
          <ul>Équipement du véhicule</ul>
          <li>climatisation</li>
          <li>Boîte automatique</li>
          <li>4 Portes</li>
          <br />
          <br />
          <ul>Capacité</ul>
          <li>5 Personnes</li>
          <li>1 Valise</li>
          <li>2 Bagages à mai</li>
          <br />
          <br />
          <p>Age minimum du conducteur</p>
          <p>18 ans</p>
          <br />
          <br />
          <p>Durée minimum de détention du permis de conduire</p>
          <p>5 année(s)</p>
          <br />
          <br />
          <ul>Conditions générales</ul>
          <li>Informations sur la location</li>
          <li>CGV</li>
          <li>Politique de confidentialité</li>
          <div className="block-3">
            <p>Départ</p>
            <p>Bordeaux Aéroport</p>
            <p>13.01.2023 à 12:00 heures</p>
            <br />
            <br />
            <p>Retour</p>
            <p>Bordeaux Gare Saint-Jean TGV </p>
            <p>16.01.2023 à 09:00 heures </p>
            <br />
            <br />
            <p>Période de location</p>
            <p>3 jours </p>
            <br />
            <br />
            <ul>Équipement du véhicule</ul>
            <li>climatisation</li>
            <li>Boîte automatique</li>
            <li>4 Portes</li>
            <br />
            <br />
            <ul>Capacité</ul>
            <li>5 Personnes</li>
            <li>1 Valise</li>
            <li>2 Bagages à mai</li>
            <br />
            <br />
            <p>Age minimum du conducteur</p>
            <p>18 ans</p>
            <br />
            <br />
            <p>Durée minimum de détention du permis de conduire</p>
            <p>5 année(s)</p>
            <br />
            <br />
            <ul>Conditions générales</ul>
            <li>Informations sur la location</li>
            <li>CGV</li>
            <li>Politique de confidentialité</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToRent;
