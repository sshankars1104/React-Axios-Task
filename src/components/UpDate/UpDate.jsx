import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../mokeAPI";
import "./UpDate.css";

function Update() {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, lastName, age, isMarried, sex, id } = location.state;

  const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
  const [updatedLastName, setUpdatedLastName] = useState(lastName);
  const [updatedAge, setUpdatedAge] = useState(age);
  const [updatedIsMarried, setUpdatedIsMarried] = useState(isMarried);
  const [updatedSex, setUpdatedSex] = useState(sex);

  const updateUser = async () => {
    await axios.put(`${API_URL}/${id}`, {
      firstName: updatedFirstName,
      lastName: updatedLastName,
      age: updatedAge,
      isMarried: updatedIsMarried,
      sex: updatedSex,
    });
    navigate("/");
  };

  return (
    <div className="update-container">
      <h2>Update User</h2>
      <form className="update-form">
        <label>
          First Name:
          <input
            type="text"
            value={updatedFirstName}
            onChange={(e) => setUpdatedFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={updatedLastName}
            onChange={(e) => setUpdatedLastName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={updatedAge}
            onChange={(e) => setUpdatedAge(e.target.value)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={updatedIsMarried}
            onChange={() => setUpdatedIsMarried(!updatedIsMarried)}
          />
          Is Married
        </label>
        <div>
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              checked={updatedSex === "male"}
              onChange={(e) => setUpdatedSex(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              checked={updatedSex === "female"}
              onChange={(e) => setUpdatedSex(e.target.value)}
            />
            Female
          </label>
        </div>
        <button type="button" onClick={updateUser}>
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
