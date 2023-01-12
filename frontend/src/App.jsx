import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginUser from "./pages/LoginUser";
import HomePage from "./pages/HomePage";
import ToRent from "./pages/ToRent";
import "./App.css";
import Footer from "./components/Footer";
import "./assets/fonts/GT-America-Bold.otf";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ToRent" element={<ToRent />} />
          <Route path="/loginUser" element={<LoginUser />} />
          <Route path="/loginFirm" element={<LoginUser />} />
        </Routes>
      </Router>
      <Navbar />
      {/* <Footer /> */}
      <Navbar />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
