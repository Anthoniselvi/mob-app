import React, { useState } from "react";
import "./Register.css";
import Dashboard from "./Dashboard";

function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleInputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <input
          onChange={handleInputs}
          type="text"
          placeholder="Enter your Name"
          name="name"
        />
        <input
          onChange={handleInputs}
          type="email"
          placeholder="Enter your E.mail ID"
          name="email"
        />
        <input
          onChange={handleInputs}
          type="text"
          placeholder="Enter your Phone Number"
          name="number"
        />
        <input
          onChange={handleInputs}
          type="password"
          placeholder="Enter the Password"
          name="password"
        />
        <button onSubmit={handleSubmit} class="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
