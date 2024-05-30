import React, { useState } from "react";
import "./Create.css";
import { API_URL } from "../../mokeAPI";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [isMarried, setIsMarried] = useState(false);
  const [selectedSex, setSelectedSex] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      age,
      isMarried,
      sex: selectedSex,
    });
    navigate("/");
  };

  return (
    <div className="form-container">
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <div className="married-checkbox">
          <label>isMarried:</label>
          <input
            type="checkbox"
            checked={isMarried}
            onChange={() => setIsMarried(!isMarried)}
          />
        </div>
        <div className="radio-group">
          <label>
            Male
            <input
              type="radio"
              name="sex"
              value="male"
              checked={selectedSex === "male"}
              onChange={(event) => setSelectedSex(event.target.value)}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="sex"
              value="female"
              checked={selectedSex === "female"}
              onChange={(event) => setSelectedSex(event.target.value)}
            />
          </label>
        </div>
      </form>
      <button onClick={postData}>Submit</button>
    </div>
  );
}

export default Create;
