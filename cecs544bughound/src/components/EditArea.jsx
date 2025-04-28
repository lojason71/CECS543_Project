
import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
function EditArea () {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const location = useLocation();
  const area_data = location.state || {};
  
  const [programs, setPrograms] = useState([]);
    
    

  const getPrograms = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/program/');
      const json = await response.json();
      console.log(json)

      setPrograms(json);
      setProgramID(area_data.program_id)
      setArea(area_data.area)
    } catch (error) {
      console.error(error);
    } 
  };

  const getUser = async () => {
    if (user == null){
      navigate("/login")
    }
    };
  
    React.useEffect(() => {
      getUser();
      getPrograms();
      

    }, []);


    const deleteArea = async (event) => {
        event.preventDefault();
        // Here you would typically send the form data to a backend
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
      };
    
        try {
            await fetch(
                `http://127.0.0.1:8000/area/${area_data.area_id}`, requestOptions)
                .then(response => {
                          navigate(-1)
  
                })
        }
        catch (error) {
          window.alert("There was an error, please try again.");
    
        }
    
      };



  const [area, setArea] = useState('');
    const [program_id, setProgramID] = useState(0);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Here you would typically send the form data to a backend
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({area_id: area_data.area_id, area: area, program_id: program_id})
      };
    
        try {
            await fetch(
                'http://127.0.0.1:8000/area/', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                          window.alert("Area Updated!");
                        });
                })
        }
        catch (error) {
          window.alert("There was an error, please try again.");
    
        }

    };
  
    return (
      <div style={{ backgroundColor: '#FFD700', padding: '20px', height:'100vh' }}> 
        <h2>Edit Area</h2>
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="area">Area</label>
            <input
              type="text"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
  
          <div>
          <label htmlFor="userLevel">Programs</label>
          <select
            id="programs"
            value={program_id}
            onChange={(e) => setProgramID(e.target.value)}
          >

            {programs.map((program, index) => (
            <option value={program.program_id}>{program.program}</option>
          ))}
            
          </select>
        </div>
  

  
          <button type="submit">Submit</button>
          <button onClick={deleteArea} type="button">Delete Area</button>

          <button onClick={() => navigate(-1)} type="button">Cancel</button>
        </form>
      </div>
    );
  }
  
  export default EditArea;