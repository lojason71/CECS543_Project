import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

// type Program = {
//   program_id: number; 
//   program: string;
//   release: string;
//   version: string;
// };

function Programs() {

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

  // const [programName, setProgramName] = useState('');
  // const [programRelease, setProgramRelease] = useState('');
  // const [programVersion, setProgramVersion] = useState('');
  const [programs, setPrograms] = useState([]);


  const getPrograms = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/program/');
      const json = await response.json();
      setPrograms(json);
    } catch (error) {
      console.error(error);
    } 
  };

  React.useEffect(() => {
    getPrograms();
  }, []);




  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // send the form data to a backend
  //   console.log({ programName, programRelease, programVersion });
  //   // Reset the form fields
  //   setProgramName('');
  //   setProgramRelease('');
  //   setProgramVersion('');
  // };

  return (
    <div>
      <h2>Programs</h2>

      <table>
        <thead>
          <tr>
            <th>Program Name</th>
            <th>Release</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr key={index}>
              <td>{program.program}</td>
              <td>{program.release}</td>
              <td>{program.version}</td>
              <td>        <button onClick={() => navigate("/programs/edit", { state: program })} type="button">Edit</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="programName">Program Name</label>
          <input
            type="text"
            id="programName"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="programRelease">Program Release</label>
          <input
            type="text"
            id="programRelease"
            value={programRelease}
            onChange={(e) => setProgramRelease(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="programVersion">Program Version</label>
          <input
            type="text"
            id="programVersion"
            value={programVersion}
            onChange={(e) => setProgramVersion(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button> */}
        <button onClick={() => navigate(-1)} type="button">Cancel</button>
      {/* </form> */}
    </div>
  );
}

export default Programs;