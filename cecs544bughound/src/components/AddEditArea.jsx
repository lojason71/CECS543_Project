import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';


function AddEditArea() {

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

  const [areas, setArea] = useState([]);


  const getAreas = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/area/');
      const json = await response.json();
      setArea(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getAreas();
  }, []);






  return (
    <div>
      <h2>Areas</h2>

      <table>
        <thead>
          <tr>
          <th>Area ID</th>

            <th>Area</th>
            <th>Program ID</th>
   

          </tr>
        </thead>
        <tbody>
          {areas.map((area, index) => (
            <tr key={index}>
                              <td>{area.area_id}</td>

              <td>{area.area}</td>
              <td>{area.program_id}</td>
             

              <td>        <button onClick={() => navigate("/areas/edit", { state: area })} type="button">Edit</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate('/areas/add')} type="button">Add</button>

        <button onClick={() => navigate(-1)} type="button">Cancel</button>
    </div>
  );
}

export default AddEditArea;