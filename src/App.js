import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";
import EditStudent from "./components/EditStudent";

export const StudentContext = React.createContext("");
function App() {
  let data1 = {
    earning: "20,000",
    annual: "2,40,000",
    task: "20",
    pending: 26,
  };
  let [data, setData] = useState([
    {
      name: "Raj",
      degree: "B.E",
      dept: "Electrical",
      mobile: "123456879",
      email: "raj@email.com",
    },
    {
      name: "Ram",
      degree: "B.E",
      dept: "Electronics",
      mobile: "123456879",
      email: "ram@email.com",
    },
  ]);
  return (
    <>
      <Router>
        <StudentContext.Provider value={{ data, setData }}>
          <div style={{ display: "grid", gridTemplateColumns: "17% 83%" }}>
            <div>
              <SideBar />
            </div>
            <div>
              <Routes>
                <Route
                  path="/dashboard"
                  element={<Dashboard value={data1} />}
                />
                <Route path="/add-students" element={<AddStudent />} />
                <Route path="/all-students" element={<AllStudents />} />

                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/" element={<Dashboard value={data1} />} />
              </Routes>
            </div>
          </div>
        </StudentContext.Provider>
      </Router>
    </>
  );
}

export default App;
