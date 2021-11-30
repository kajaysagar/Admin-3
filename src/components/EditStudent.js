import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
function EditStudent() {
  useEffect(() => {
    {
      console.log(params);
      if (params.id) {
        getData();
      }
    }
  }, []);

  let context = useContext(StudentContext);
  let navigate = useNavigate();
  const params = useParams();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [degree, setDegree] = useState("");
  let [dept, setDept] = useState("");
  let handleSave = () => {
    context.data[params.id] = {
      name,
      email,
      mobile,
      degree,
      dept,
    };

    context.setData([...context.data]);
    navigate("/all-students");
  };

  let getData = () => {
    let data = context.data[params.id];
    setName(data.name);
    setEmail(data.email);
    setMobile(data.mobile);
    setDegree(data.degree);
    setDept(data.dept);
  };
  return (
    <div>
      <h1>Edit Student</h1>
      <div>
        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            value={name}
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
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
            value={mobile}
            class="form-control"
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Degree</label>
          <input
            type="text"
            value={degree}
            class="form-control"
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Degree"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Department</label>
          <input
            type="text"
            value={dept}
            class="form-control"
            onChange={(e) => setDept(e.target.value)}
            placeholder="Department"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditStudent;
