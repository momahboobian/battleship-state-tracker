// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import WelcomePage from "./components/welcome/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/battle" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
