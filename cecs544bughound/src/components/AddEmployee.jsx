import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
function AddEmployee () {

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


  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userLevel, setUserLevel] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a backend
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name: name, username: userName, password: password, level: userLevel})
  };

    try {
        await fetch(
            'http://127.0.0.1:8000/employee/', requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                      window.alert("New employee created!");
                    });
            })
    }
    catch (error) {
      window.alert("There was an error, please try again.");

    }
    // Reset the form fields
    setName('');
    setUserName('');
    setPassword('');
    setUserLevel('');
  };

  return (
    <div style={{ backgroundColor: '#FFD700', padding: '20px', height:'100vh' }}> 
      <h2>Add an Employee</h2>

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
        <button onClick={() => navigate(-1)} type="button">Cancel</button>
      </form>
    </div>
  );
}

export default AddEmployee;