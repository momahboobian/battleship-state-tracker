import React from "react";

function SignUp() {
  return (
    <div className="text-center p-5">
      <h2 className="display-5 text-light fw-lighter">
        Sign up for the battle
      </h2>
      <div className="d-flex flex-column align-items-center gap-4 p-4 pt-5">
        <div className="col-4 input-effect">
          <input className="effect-16" type="text" placeholder="" />
          <label>First Name</label>
          <span className="focus-border"></span>
        </div>
        <div className="d-flex gap-5 p-4">
          <button className="btn-next">Back</button>

          <button className="btn-next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
