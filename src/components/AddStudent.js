import React, { useState, useContext } from "react";
import { StudentContext } from "../App";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  let context = useContext(StudentContext);
  let navigate = useNavigate();
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [mobile, setMobile] = useState();
  let [degree, setDegree] = useState();
  let [dept, setDept] = useState();

  let handleSave = () => {
    context.data.push({
      name,
      email,
      mobile,
      degree,
      dept,
    });
    navigate("/all-students");
  };

  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            id="exampleInputPassword1"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Mobile</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setMobile(e.target.value)}
            id="exampleInputPassword1"
            placeholder="Mobile"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Degree</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setDegree(e.target.value)}
            id="exampleInputPassword1"
            placeholder="Degree"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Department</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setDept(e.target.value)}
            id="exampleInputPassword1"
            placeholder="Department"
          />
        </div>
        <button class="btn btn-primary" onClick={handleSave}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
