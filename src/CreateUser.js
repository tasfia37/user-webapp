import React, { useState, useEffect } from "react";
import { View } from "./component/View";
import { useNavigate } from "react-router-dom";

const getDatafromStorage = () => {
  const data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const CreateUser = () => {
  const [users, setUser] = useState(getDatafromStorage());

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [City, setCity] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  //form submitting event
  const handleAddUserSubmit = (e) => {
    e.preventDefault();

    //object
    let user = {
      FirstName,
      LastName,
      Gender,
      DateOfBirth,
      City,
      Phone,
      Email,
    };
    setUser([...users, user]);
    setFirstName("");
    setLastName("");
    setGender("");
    setDateOfBirth("");
    setCity("");
    setPhone("");
    setEmail("");
  };

  //saving data to local storage.
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  let navigate = useNavigate();

  return (
    <div className="main">
      <div className="form-container" id="former">
        <h4 class="alert alert-info text-center">Create a User</h4>
        <form
          autoComplete="off"
          className="form-group"
          onSubmit={handleAddUserSubmit}
          style={{ width: "50%", marginLeft: "25%" }}
          class="justify-content-center"
        >
          <label>FirstName</label>
          <input
            type="text"
            className="form-control"
            minLength="2"
            maxLength="50"
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={FirstName}
          ></input>
          <br></br>

          <label>LastName</label>
          <input
            type="text"
            className="form-control"
            minLength="2"
            maxLength="50"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={LastName}
          ></input>
          <br></br>

          <label for="Gender">Gender</label>
          <select
            name="Gender"
            className="form-control"
            required
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="none" selected>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <br></br>
          <label>DateOfBirth</label>
          <input
            type="date"
            className="form-control"
            min="1922-06-19"
            max="2022-06-19"
            //max="{{ $max->time }}"
            onfocus="this.max=new Date().toISOString().split('T')[0]"
            required
            onChange={(e) => setDateOfBirth(e.target.value)}
            value={DateOfBirth}
          ></input>
          <br></br>

          <label>City</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCity(e.target.value)}
            value={City}
          ></input>
          <br></br>

          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            pattern="01[0-9]{3}[0-9]{3}[0-9]{3}"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={Phone}
          ></input>
          <small>Format: 01666666666</small>
          <br></br>
          <br></br>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          ></input>
          <br></br>

          <button
            type="submit"
            className="btn btn-success"
            style={{
              padding: "0.5%",
              marginLeft: "30%",
              marginTop: "1%",
              marginBottom: "2%",
              width: "150px",
            }}
            //onClick={ () => {navigate("/users");}}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              navigate("/users");
            }}
            style={{
              padding: "0.5%",
              marginLeft: "3%",
              marginTop: "1%",
              marginBottom: "2%",
              width: "150px",
            }}
          >
            Users List
          </button>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
