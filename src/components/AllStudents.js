import React, { useContext, useState } from "react";
import { StudentContext } from "../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AllStudents() {
  let navigate = useNavigate();
  let context = useContext(StudentContext);
  let handleDelete = (e) => {
    context.data.splice(context.data.indexOf(e), 1);
    context.setData([...context.data]);
  };

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Degree</th>
            <th scope="col">Department</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {context.data.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.degree}</td>
                <td>{e.dept}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/edit-student/" + i);
                    }}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudents;
