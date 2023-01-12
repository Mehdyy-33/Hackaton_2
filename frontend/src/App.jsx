import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginUser from "./pages/LoginUser";
import "./App.css";
import Footer from "./components/Footer";
import "./assets/fonts/GT-America-Bold.otf";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/loginUser" element={<LoginUser />} />
          <Route path="/loginFirm" element={<LoginUser />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
