import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginUser from "@pages/LoginUser";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/loginFirm" element={<LoginUser />} />
      </Routes>
    </Router>
  );
}

export default App;
