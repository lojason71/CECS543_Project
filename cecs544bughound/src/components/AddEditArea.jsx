import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AddEditAreas() {
  const { programId } = useParams();
  const [areas, setAreas] = useState([
    { areaId: 17, programId: 10, area: 'GUI - Editor' },
    { areaId: 20, programId: 10, area: 'Parser' },
  ]);
  const [newArea, setNewArea] = useState('');

  const handleAddArea = () => {
    if (newArea.trim()) {
      const newAreaObj = {
        areaId: Date.now(),
        programId: parseInt(programId, 10),
        area: newArea,
      };
      setAreas([...areas, newAreaObj]);
      setNewArea('');
    }
  };

  const handleUpdateArea = (areaId, updatedArea) => {
    setAreas(areas.map((area) => (
      area.areaId === areaId ? { ...area, area: updatedArea } : area
    )));
  };

  return (
    <div style={{ backgroundColor: '#FFD700', padding: '20px', height:'100vh' }}>
      <h2>Add Area to FIDE - 1 - 1</h2> {/* Static Title for now */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid' }}>Area ID</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid' }}>Program ID</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid' }}>Area</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid' }}></th>
          </tr>
        </thead>
        <tbody>
          {areas.map((area) => (
            <tr key={area.areaId}>
              <td style={{ padding: '8px', borderBottom: '1px solid' }}>{area.areaId}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid' }}>{area.programId}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid' }}>
                <input
                  type="text"
                  value={area.area}
                  onChange={(e) => handleUpdateArea(area.areaId, e.target.value)}
                  style={{ width: '100%' }}
                />
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid' }}>
                <button style={{ padding: '5px 10px' }} onClick={() => handleUpdateArea(area.areaId, area.area)}>Update</button>
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid' }}>Add</td>
            <td style={{ padding: '8px', borderBottom: '1px solid' }}>{programId}</td>
            <td style={{ padding: '8px', borderBottom: '1px solid' }}>
              <input
                type="text"
                value={newArea}
                onChange={(e) => setNewArea(e.target.value)}
                style={{ width: '100%' }}
              />
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid' }}>
              <button style={{ padding: '5px 10px' }} onClick={handleAddArea}>AddArea</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button style={{ marginTop: '10px' }}>Done</button>
    </div>
  );
}

export default AddEditAreas;