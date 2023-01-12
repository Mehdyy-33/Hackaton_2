import React from "react";
import "../styles/Footer.css";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="info">
          <p className="footermessage">
            Smartfleet by AWS, service de location de véhicule et covoiturage à
            destination des entreprises pour les particuliers
          </p>
          <br />
          <br />
          <br />
          <p>Smartfleet permet aux entreprises de partager leurs...</p>
        </div>
        <div className="info1">
          <h3>Informations</h3>
          <br />
          <ul>
            <li>Nos tarifs</li>
            <br />
            <li>Notre FAQ</li>
            <br />
            <li>Mentions légales</li>
            <br />
            <li>Politique de confidentialité</li>
            <br />
            <li>Politique de cookies</li>
          </ul>
        </div>
        <div className="info2">
          <h3>Contact</h3>
          <br />
          <br />
          <br />
          <p>Tél 01.02.03.04.05</p>
          <br />
          <p>Mail : contact@smartfleet.fr</p>
          <br />
          <p>
            Adresse : 171 rue Lucien Faure - <br />
            33000 Bordeaux - France
          </p>
        </div>
        <div className="info3">
          <h3>Réseaux sociaux</h3>
          <br />
          <br />
          <img
            className="instagramlogo"
            src="../src/assets/images/instagramlogo.png"
            alt="instagramicon"
          />
          <img
            className="linkedinlogo"
            src="../src/assets/images/linkedinlogo.png"
            alt="linkedinlogo"
          />
          <img
            className="twitterlogo"
            src="../src/assets/images/twitterlogo.png"
            alt="twitterlogo"
          />
        </div>
      </div>
      <p className="rights">SmartFleet © 2023 - Tous droits réservés</p>
    </div>
  );
}

export default Footer;
