import React, { useState } from 'react';

function EditEmployee() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userLevel, setUserLevel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, userName, password, userLevel });
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
            <option value="">Select Level</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>
        </div>

        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

export default EditEmployee;