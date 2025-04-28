import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';


function Employees() {

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const getUser = async () => {
    if (user == null){
      navigate("/login")
    }
    };
  
    React.useEffect(() => {
      getUser();
    }, []);

  const [employees, setEmployees] = useState([]);


  const getPrograms = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/employee/');
      const json = await response.json();
      setEmployees(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getPrograms();
  }, []);






  return (
    <div>
      <h2>Employees</h2>

      <table>
        <thead>
          <tr>
          <th>Employee ID</th>

            <th>Name</th>
            <th>Username</th>
            <th>Level</th>
            <th>Password</th>

          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
                              <td>{employee.employee_id}</td>

              <td>{employee.name}</td>
              <td>{employee.username}</td>
              <td>{employee.level}</td>
              <td>***********</td>

              <td>        <button onClick={() => navigate("/employees/edit", { state: employee })} type="button">Edit</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>


        <button onClick={() => navigate(-1)} type="button">Cancel</button>
    </div>
  );
}

export default Employees;