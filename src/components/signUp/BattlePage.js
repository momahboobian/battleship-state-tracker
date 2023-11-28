import React from "react";
import "./BattlePage.css";

function BattlePage() {
  return (
    <div className="background-container d-flex align-items-center justify-content-center">
      <div className="background-image"></div>
      <div className="gradient-overlay"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 component-20 border">
            <div className="text-center p-5">
              <h2 className="display-5 text-light fw-lighter">
                Welcome comrade!
              </h2>
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary btn-join">
                  Join new battle
                </button>
                <button className="btn btn-secondary btn-return">
                  Return to battle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BattlePage;
