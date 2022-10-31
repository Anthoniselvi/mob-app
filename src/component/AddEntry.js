import React, { useState } from "react";
import Table from "react";
import "./AddEntry.css";

function AddEntry() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    type: true,
    amount: "",
    comments: "",
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="entry-container">
      <h1>Add New Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        />
        <input
          type="text"
          placeholder="City"
          onChange={handleChange}
          name="city"
          value={formData.city}
        />
        <div className="select-container">
          <p>Presentation Types</p>
          <div className="select-type">
            <input
              type="radio"
              id="rupees"
              name="present"
              value="rupees"
              //   checked={formData.money === "rupees"}
              checked="checked"
              onChange={handleChange}
            />
            <label htmlFor="rupees">Money</label>
          </div>
          <br />
          <div className="select-type">
            <input
              type="radio"
              id="thing"
              name="present"
              value="thing"
              //   checked={formData.gift === "thing"}
              onChange={handleChange}
            />
            <label htmlFor="thing">Thing</label>
          </div>
          <br />
          <div className="select-type">
            <input
              type="radio"
              id="both"
              name="present"
              value="both"
              //   checked={formData.employment === "both"}
              onChange={handleChange}
            />
            <label htmlFor="both">Both</label>
          </div>
          <br />
        </div>
        <br />
        <input
          type="text"
          placeholder="Amount"
          onChange={handleChange}
          name="amount"
          value={formData.amount}
        />
        <textarea
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
        />
        <button className="add-button">Add</button>
      </form>
    </div>
  );
}

export default AddEntry;
