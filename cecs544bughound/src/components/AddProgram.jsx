import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
function AddProgram () {
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


  const [program, setProgram] = useState('');
    const [release, setRelease] = useState('');
    const [version, setVersion] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Here you would typically send the form data to a backend
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({program: program, release: release, version: version})
    };
  
      try {
          await fetch(
              'http://127.0.0.1:8000/program/', requestOptions)
              .then(response => {
                  response.json()
                      .then(data => {
                        window.alert("New program created!");
                      });
              })
      }
      catch (error) {
        window.alert("There was an error, please try again.");
  
      }
      // Reset the form fields
      setProgram('');
      setRelease('');
      setVersion('');
      setUserLevel('');
    };
  
    return (
      <div style={{ backgroundColor: '#FFD700', padding: '20px', height:'100vh' }}> 
        <h2>Add a Program</h2>
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="program">Program</label>
            <input
              type="text"
              id="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="release">Release</label>
            <input
              type="text"
              id="release"
              value={release}
              onChange={(e) => setRelease(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="version">Version</label>
            <input
              type="text"
              id="version"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            />
          </div>
  

  
          <button type="submit">Submit</button>
          <button onClick={() => navigate(-1)} type="button">Cancel</button>
        </form>
      </div>
    );
  }
  
  export default AddProgram;