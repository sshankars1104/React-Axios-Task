import React, { useState, useEffect } from "react";
import "./Read.css";
import axios from "axios";
import { API_URL } from "../../mokeAPI";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const editUser = (user) => {
    navigate("/edit", { state: user });
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    callGetApi();
  };

  const callGetApi = async () => {
    const resp = await axios.get(API_URL);
    setApiData(resp.data);
  };

  useEffect(() => {
    callGetApi();
  }, []);

  return (
    <div className="read-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>isMarried</th>
            <th>Sex</th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.isMarried ? "Yes" : "No"}</td>
              <td>{user.sex}</td>
              <td>
                <button className="edit-button" onClick={() => editUser(user)}>
                  <MdEditNote />
                </button>
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteUser(user.id)}
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
