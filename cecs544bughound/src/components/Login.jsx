import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

function Login () {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a backend
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: userName, password: password})
  };

    try {
        await fetch(
            'http://127.0.0.1:8000/login/', requestOptions)
            .then(response => {

                if (response.status === 401) {
                    window.alert("Please enter a valid username and password.");
                }else{

                    response.json()
                        .then(data => {
                            console.log(data)
                            
                            if (data.level == 3){
                                login(data)
                                navigate("/")

                            } else {
                                window.alert("You are not level 3. Please contact your system admin");

                            }
                        });
                    }
            })
    }
    catch (error) {
      window.alert("There was an error, please try again.");

    }
    // Reset the form fields
    setUserName('');
    setPassword('');
  };

  return (
    <div style={{ backgroundColor: '#FFD700', padding: '20px', height:'100vh' }}> 
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>


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


        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;