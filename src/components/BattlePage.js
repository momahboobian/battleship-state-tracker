import React from "react";

function BattlePage() {
  return (
    <div className="container mt-5">
      <div className="border p-4">
        <h2 className="text-center">Welcome comrade!</h2>
        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-primary">Join new battle</button>
          <button className="btn btn-secondary">Return to battle</button>
        </div>
      </div>
    </div>
  );
}

export default BattlePage;
