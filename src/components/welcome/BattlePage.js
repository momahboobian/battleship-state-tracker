import React, { useState, useEffect } from "react";
import "./BattlePage.css";
import SignUp from "../signUp/SignUp";

function BattlePage() {
  const [joining, setJoining] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); // Delay for 2 seconds (2000 milliseconds)

    return () => clearTimeout(delay);
  }, []);

  const handleJoinClick = () => {
    setJoining(true);
  };

  return (
    <div className="background-container d-flex align-items-center justify-content-center">
      <div className="background-image"></div>
      <div className="gradient-overlay"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 component-20 border">
            <div className="text-center p-5">
              {loading ? (
                <h2>Loading...</h2>
              ) : !joining ? (
                <>
                  <h2 className="display-5 text-light fw-lighter">
                    Welcome comrade!
                  </h2>
                  <div className="d-grid gap-2 mt-4">
                    <button
                      className="btn btn-primary btn-join"
                      onClick={handleJoinClick}
                    >
                      Join new battle
                    </button>
                    <button className="btn btn-secondary btn-return">
                      Return to battle
                    </button>
                  </div>
                </>
              ) : (
                <SignUp />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BattlePage;
