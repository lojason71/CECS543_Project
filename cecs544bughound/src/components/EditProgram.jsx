import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
function EditProgram () {
  const navigate = useNavigate();
  const location = useLocation();
  const program_data = location.state || {};
  const { user } = useContext(AuthContext);

  const getUser = async () => {
    if (user == null){
      navigate("/login")
    }
    };
  
    React.useEffect(() => {
      getUser();
      setProgram(program_data.program)
      setRelease(program_data.release)
      setVersion(program_data.version)

    }, []);


  const [program, setProgram] = useState('');
    const [release, setRelease] = useState('');
    const [version, setVersion] = useState('');

    
    const deleteProgram = async (event) => {
      event.preventDefault();
      // Here you would typically send the form data to a backend
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
  
      try {
          await fetch(
              `http://127.0.0.1:8000/program/${program_data.program_id}`, requestOptions)
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
        body: JSON.stringify({program_id: program_data.program_id, program: program, release: release, version: version})
    };
  
      try {
          await fetch(
              'http://127.0.0.1:8000/program/', requestOptions)
              .then(response => {
                  response.json()
                      .then(data => {
                        window.alert("Program Updated!");
                      });
              })
      }
      catch (error) {
        window.alert("There was an error, please try again.");
  
      }

    };
  
    return (
      <div style={{ backgroundColor: '#FFD700', padding: '20px', height:'100vh' }}> 
        <h2>Edit Program</h2>
  
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
          <button onClick={deleteProgram} type="button">Delete Program</button>

          <button onClick={() => navigate(-1)} type="button">Cancel</button>
        </form>
      </div>
    );
  }
  
  export default EditProgram;