import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/shared/Home";
import Login from "./components/pages/shared/Login";
import Parent from "./components/pages/parent/Parent";
import Patient from "./components/pages/patient/Patient";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./components/pages/patient/Games";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
