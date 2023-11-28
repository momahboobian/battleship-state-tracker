import React from "react";

function SignUp() {
  return (
    <div>
      <h2 className="display-5 text-light fw-lighter">
        Sign up for the battle
      </h2>
      <div className="mt-4">
        <input
          type="text"
          className="form-control mb-3 custom-input"
          placeholder="Your name"
        />
        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  );
}

export default SignUp;
