// LandingPage.js
import React from "react";

function LandingPage() {
  return (
    <div className="d-flex justify-content-center align-items-center position-relative vh-100 text-white">
      {/* Main background */}
      <div className="main-bg">{/* Main background */}</div>

      <div className="text-center pt-5">
        <h1 className="display-5 fw-lighter">Welcome to</h1>
        <p className="battleship-text">Battleship</p>

        <a href="/battle" class="custom-btn">
          <span>Start</span>
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
