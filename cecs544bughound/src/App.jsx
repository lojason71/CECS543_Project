import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import DatabaseMaintenance from "./components/DatabaseMaintenance";
import AddProgram from "./components/AddProgram";
import AddEmployee from "./components/AddEmployee";
import AddEditArea from "./components/AddEditArea";
import Programs from "./components/Programs";
import EditProgram from "./components/EditProgram";
import EditEmployee from "./components/EditEmployee";
import Employees from "./components/Employees";
import Login from "./components/Login";
import { AuthProvider } from "../context/AuthContext";
import AddArea from "./components/AddArea";
import EditArea from "./components/EditArea";
import NewBugReportForm from "./components/NewBugReportForm";
import UpdateBugReportForm from "./components/UpdateBugReportForm";
import BugSearchForm from "./components/BugSearchForm";
import BugSearchResults from "./components/BugsSearchResult";

function App() {
  return (
    <AuthProvider>

    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/db-maintenance" element={<DatabaseMaintenance />} />
        <Route path="/programs/add" element={<AddProgram />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/areas/edit-add" element={<AddEditArea />} />
        <Route path="/areas/add" element={<AddArea />} />
        <Route path="/areas/edit" element={<EditArea />} />
        <Route path="/bugs/new" element={<NewBugReportForm />} />
        <Route path="/bugs/update" element={<UpdateBugReportForm />} />
        <Route path="/bugs/search" element={<BugSearchForm />} />
        <Route path="/bugs/results" element={<BugSearchResults/>} />


        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/edit" element={<EditProgram />} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/employees/edit" element={<EditEmployee/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
