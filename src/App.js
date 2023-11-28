import "./App.css";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center position-relative vh-100 text-white">
      <div className="main-bg">{/* Main background */}</div>

      <div className="text-center pt-5">
        <h1 className="display-5 fw-lighter">Welcome to</h1>
        <p className="battleship-text">Battleship</p>
        <button className="btn-custom">Start</button>
      </div>
    </div>
  );
}

export default App;
