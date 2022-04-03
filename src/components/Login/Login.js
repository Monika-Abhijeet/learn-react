import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
function Login() {
  return (
    <div className="login-container">
      <h1>Login Screen</h1>
      <form className="form form-container">
        <label htmlFor="userId" className="form-label">
          Userid
        </label>

        <input
          type="text"
          name="userId"
          id="userId"
          className="form-control"
          placeholder="enter your user id"
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" name="password" className="form-control"></input>

        <button className="btn btn-primary">Login</button>
        <Button variant="contained" color="secondary" endIcon={<SaveIcon />}>
          Trest
        </Button>
      </form>
    </div>
  );
}

export default Login;
