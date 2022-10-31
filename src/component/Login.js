import React, { useState } from "react";
import "./Login.css";
import Dashboard from "./Dashboard";
import RegisterPage from "./Register";

function Login() {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };

  const [inputs, setInputs] = useState({
    email: "",
    number: "",
    password: "",
  });

  const handleLoginInputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input
          onChange={handleLoginInputs}
          type="text / number"
          placeholder="Enter your Ph.No./E.mail"
          name="number / text"
        />
        <input
          onChange={handleLoginInputs}
          type="password"
          placeholder="Enter your Password"
          name="password"
        />
        <div className="login-buttons">
          <button onSubmit={handleLoginSubmit}>Login</button>
          <button onClick={RegisterPage}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
