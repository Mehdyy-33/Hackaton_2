import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginUser from "./pages/LoginUser";
import HomePage from "./pages/HomePage";
import ToRent from "./pages/ToRent";
import "./App.css";
// import "./assets/fonts/GT-America-Bold.otf";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyTrips from "./pages/MyTrips";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ToRent" element={<ToRent />} />
          <Route path="/loginUser" element={<LoginUser />} />
          <Route path="/loginFirm" element={<LoginUser />} />
          <Route path="/MyTrips" element={<MyTrips />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
