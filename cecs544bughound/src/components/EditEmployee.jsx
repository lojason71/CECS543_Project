import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
function EditEmployee () {

  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state || {};
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userLevel, setUserLevel] = useState(1);

  const { user } = useContext(AuthContext);

  const getUser = async () => {
    if (user == null){
      navigate("/login")
    }
    
    };
  
    React.useEffect(() => {
      getUser();
      setName(employee.name)
      setPassword(employee.password)
      setUserLevel(employee.level)
      setUserName(employee.username)

    }, []);




    const deleteUser = async (event) => {
      event.preventDefault();
      // Here you would typically send the form data to a backend
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
  
      try {
          await fetch(
              `http://127.0.0.1:8000/employee/${employee.employee_id}`, requestOptions)
              .then(response => {
                        navigate(-1)

              })
      }
      catch (error) {
        window.alert("There was an error, please try again.");
  
      }
  
    };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a backend
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({employee_id: employee.employee_id, name: name, username: userName, password: password, level: userLevel})
  };

    try {
        await fetch(
            'http://127.0.0.1:8000/employee/', requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                      window.alert("Employee Updated!");
                    });
            })
    }
    catch (error) {
      window.alert("There was an error, please try again.");

    }

  };

  return (
    <div style={{ backgroundColor: '#FFD700', padding: '20px', height:'100vh' }}> 
      <h2>Edit Employee</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="userLevel">User Level</label>
          <select
            id="userLevel"
            value={userLevel}
            onChange={(e) => setUserLevel(e.target.value)}
          >
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
        </div>

        <button type="submit">Submit</button>
        <button onClick={deleteUser} type="button">Delete Employee</button>
        <button onClick={() => navigate(-1)} type="button">Cancel</button>
      </form>
    </div>
  );
}

export default EditEmployee;