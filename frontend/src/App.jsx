import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginUser from "./pages/LoginUser";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MyTrips from "./pages/MyTrips";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
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
