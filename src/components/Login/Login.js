import React from "react";
import "./Login.css";
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
      </form>
    </div>
  );
}

export default Login;
