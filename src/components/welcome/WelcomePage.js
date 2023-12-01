import { useState, useEffect } from "react";
import SignUp from "../signUp/SignUp";
import GameBoard from "../gameBoard/GameBoard";
import "./WelcomePage.css";

function WelcomePage() {
  const [joining, setJoining] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showGameBoard, setShowGameBoard] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const handleJoinClick = () => {
    setJoining(true);
  };

  const handleNextClick = () => {
    setShowGameBoard(true);
  };

  const handleBackClick = () => {
    setJoining(false);
  };

  return (
    <div className="background-container d-flex align-items-center justify-content-center">
      <div className="background-image"></div>
      {!showGameBoard ? (
        <>
          <div className="gradient-overlay"></div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 component-20 border">
                {!joining ? (
                  <div className="text-center p-5">
                    <h2 className="display-5 text-light fw-lighter">
                      Welcome comrade!
                    </h2>
                    <div className="d-flex flex-column align-items-center gap-4 p-4 mt-5 pt-5">
                      <button className="btn-join" onClick={handleJoinClick}>
                        Join new battle
                      </button>
                      <button className="btn-return">Return to battle</button>
                    </div>
                  </div>
                ) : loading ? (
                  <div className="spinner-container d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <SignUp
                    onBackClick={handleBackClick}
                    handleNextClick={handleNextClick}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <GameBoard />
      )}
    </div>
  );
}

export default WelcomePage;
