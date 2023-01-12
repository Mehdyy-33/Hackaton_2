import "./EntrepriseDash.css";

function EntrepriseDash() {
  return (
    <div id="fullContainer">
      <div className="leftContainer">
        <div className="company">
          {" "}
          <h1>BUSINESS</h1>
        </div>
      </div>
      <div className="contentContainer">
        <div className="activityButtons">
          <button id="activeOrderBtn" type="button">
            TO RENT
          </button>
          <button id="noOrderBtn" type="button">
            CAR POOL
          </button>
        </div>
        <div className="adsContainer">
          <div className="ads" id="location">
            <div className="content">
              <div className="fleet">
                <img src="/src/assets/images/cosySec.png" alt="" />
                <h2>BMW X8</h2>
              </div>
              <div className="allInfo">
                <div className="conducteur">
                  <h2>Conducteur:</h2>
                  <h3>Luc Jaubert</h3>
                </div>
                <div className="passagers">
                  <h2>Destination:</h2>
                  <h3>Gare St Jean - Champs Elysée</h3>
                </div>
                <div className="reservation">
                  <h2>Reservation:</h2>
                  <h3>XN1883</h3>
                </div>
              </div>
              <div className="sideInfo">
                <div className="resaType">
                  <h1 id="type">RENTAL</h1>
                </div>
                <div className="destination" />
              </div>
            </div>
          </div>
        </div>
        <div className="adsContainer">
          <div className="ads" id="covoiturage">
            <div className="content">
              <div className="fleet">
                <img src="/src/assets/images/cosySec.png" alt="" />
                <h2>BMW X8</h2>
              </div>
              <div className="allInfo">
                <div className="conducteur">
                  <h2>Conducteur:</h2>
                  <h3>Luc Jaubert</h3>
                </div>
                <div className="passagers">
                  <h2>Destination:</h2>
                  <h3>Gare St Jean - Champs Elysée</h3>
                </div>
                <div className="reservation">
                  <h2>Reservation:</h2>
                  <h3>XN1883</h3>
                </div>
              </div>
              <div className="sideInfo">
                <div className="resaType">
                  <h1 id="type">CAR POOL</h1>
                </div>
                <div className="destination" />
              </div>
            </div>
          </div>
        </div>
        <div className="adsContainer">
          <div className="ads" id="location">
            <div className="content">
              <div className="fleet">
                <img src="/src/assets/images/cosySec.png" alt="" />
                <h2>BMW X8</h2>
              </div>
              <div className="allInfo">
                <div className="conducteur">
                  <h2>Conducteur:</h2>
                  <h3>Luc Jaubert</h3>
                </div>
                <div className="passagers">
                  <h2>Destination:</h2>
                  <h3>Gare St Jean - Champs Elysée</h3>
                </div>
                <div className="reservation">
                  <h2>Reservation:</h2>
                  <h3>XN1883</h3>
                </div>
              </div>
              <div className="sideInfo">
                <div className="resaType">
                  <h1 id="type">RENTAL</h1>
                </div>
                <div className="company" />
              </div>
            </div>
          </div>
        </div>
        <div className="adsContainer">
          <div className="ads" id="covoiturage">
            <div className="content">
              <div className="fleet">
                <img src="/src/assets/images/cosySec.png" alt="car" />
                <h2>BMW X8</h2>
              </div>
              <div className="allInfo">
                <div className="conducteur">
                  <h2>Conducteur:</h2>
                  <h3>Luc Jaubert</h3>
                </div>
                <div className="passagers">
                  <h2>Destination:</h2>
                  <h3>Gare St Jean - Champs Elysée</h3>
                </div>
                <div className="reservation">
                  <h2>Reservation:</h2>
                  <h3>XN1883</h3>
                </div>
              </div>
              <div className="sideInfo">
                <div className="resaType">
                  <h1 id="type">CAR POOL</h1>
                </div>

                <div className="destination" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <div className="addDiv">
          <button id="manage" type="button">
            Manage Fleet
          </button>

          <button id="ad" type="button">
            Post an ad
          </button>
        </div>
        <div className="deleteModifyBtn">
          <button id="actionBtn" type="button">
            Edit
          </button>
          <button id="actionBtn" type="button">
            Delete
          </button>
        </div>
        <div className="deleteModifyBtn">
          <button id="actionBtn" type="button">
            Edit
          </button>
          <button id="actionBtn" type="button">
            Delete
          </button>
        </div>
        <div className="deleteModifyBtn">
          <button id="actionBtn" type="button">
            Edit
          </button>
          <button id="actionBtn" type="button">
            Delete
          </button>
        </div>
        <div className="deleteModifyBtn">
          <button id="actionBtn" type="button">
            Edit
          </button>
          <button id="actionBtn" type="button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default EntrepriseDash;
