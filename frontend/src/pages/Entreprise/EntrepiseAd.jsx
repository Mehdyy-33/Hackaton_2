import "./EntrepriseAd.css";

function EntrepriseAd() {
  return (
    <div className="container">
      <div className="adType">
        <button>TO RENT</button>
        <button>CAR POOL</button>
      </div>
      <div className="adForm">
        <div className="adContainer">
          {" "}
          <form action="/action_page.php">
            <div class="row">
              <div className="col-25">
                <label for="vehicule" id="labelVehi">
                  Vehicule
                </label>
              </div>
              <div className="vehicule">
                <select id="vehicule" name="vehiculeType">
                  {" "}
                  <option value="Car">Car</option>
                  <option value="Scooter">Scooter</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div className="col-25">
                <label for="brand" id="labelBrand">
                  Brand
                </label>
              </div>
              <div className="brand">
                <select id="brand" name="brandType">
                  {" "}
                  <option value="BMW">BMW</option>
                  <option value="Audi">Audi</option>
                  <option value="Fiat">Fiat</option>
                  <option value="Seat">Seat</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div className="col-25">
                <label for="destination" id="labelDest">
                  Destination:
                </label>
              </div>
              <div className="destination">
                <select id="destination" name="destination">
                  {" "}
                  <option value="Bordeaux St Jean">Bordeaux St Jean</option>
                  <option value="Aeroport Paris CDG">Aeroport Paris CDG</option>
                  <option value="Paris Montparnasse">Paris Montparnasse</option>
                  <option value="Chartrons">Chartrons</option>
                  <option value="Lyon St-Exupéry">Lyon St-Exupéry</option>
                </select>
              </div>
              <div className="to">
                <label for="destination">To</label>
              </div>
              <div className="destination">
                <select id="destination" name="destination">
                  {" "}
                  <option value="Bordeaux St Jean">Bordeaux St Jean</option>
                  <option value="Aeroport Paris CDG">Aeroport Paris CDG</option>
                  <option value="Paris Montparnasse">Paris Montparnasse</option>
                  <option value="Chartrons">Chartrons</option>
                  <option value="Lyon St-Exupéry">Lyon St-Exupéry</option>
                </select>
              </div>
            </div>
            <div className="row" id="dateContainer">
              <label for="date" id="labelDate">
                Date:
              </label>
              <div className="allDates">
                <input type="date" value="2023-01-12" id="date"></input>
                <label for="time" id="labelToDate">
                  To
                </label>
                <input type="date" value="2023-01-12" id="date2"></input>
              </div>
            </div>
            <div class="row">
              <div className="col-25">
                <label for="time" id="labelTime">
                  Time:
                </label>
              </div>
              <div className="time">
                <select id="time" name="destination">
                  {" "}
                  <option value="8am">8 am</option>
                  <option value="12pm">12pm</option>
                  <option value="2pm">2 pm</option>
                  <option value="4pm">4pm</option>
                  <option value="8pm">8 pm</option>
                  <option value="10pm">10 pm</option>
                </select>
              </div>
              <div className="to">
                <label for="time" id="labelToTime">
                  To
                </label>
              </div>
              <div className="time">
                <select id="time" name="time">
                  {" "}
                  <option value="8am">8 am</option>
                  <option value="12pm">12pm</option>
                  <option value="2pm">2 pm</option>
                  <option value="4pm">4pm</option>
                  <option value="8pm">8 pm</option>
                  <option value="10pm">10 pm</option>
                </select>
              </div>
            </div>
            <div className="postDiv">
              <input type="submit" value="POST" id="postBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EntrepriseAd;
