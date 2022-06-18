import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div class="alert alert-info text-center">
        <h4>Welcome to Users website</h4>
      </div>
      <button
        class="btn btn-info text-center"
        style={{
          padding: "10px",
          marginLeft: "42%",
          marginTop: "10%",
          width: "250px",
          fontSize: "25px",
        }}
        onClick={() => {
          navigate("/createusers");
        }}
      >
        Create User
      </button>
      <br></br>
      <button
        class="btn btn-info text-center"
        style={{
          padding: "10px",
          marginLeft: "42%",
          marginTop: "2%",
          width: "250px",
          fontSize: "25px",
        }}
        onClick={() => {
          navigate("/users");
        }}
      >
        Users List
      </button>
    </div>
  );
}

export default Home;
