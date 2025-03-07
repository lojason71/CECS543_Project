import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import DatabaseMaintenance from "./components/DatabaseMaintenance";
import AddProgram from "./components/AddProgram";
import AddEmployee from "./components/AddEmployee";
import AddEditArea from "./components/AddEditArea";
import EditProgram from "./components/EditProgram";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/db-maintenance" element={<DatabaseMaintenance />} />
        <Route path="/programs/add" element={<AddProgram />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/areas/edit-add" element={<AddEditArea />} />
        <Route path="/programs/edit" element={<EditProgram />} />
        <Route path="/employees/edit" element={<EditEmployee/>} />
      </Routes>
    </Router>
  );
}

export default App;
