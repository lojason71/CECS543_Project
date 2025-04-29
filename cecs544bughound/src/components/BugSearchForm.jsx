// import React from 'react';
// import { Router, Routes, Route, Link } from "react-router-dom";

// function BugSearchForm () {
//   return (
//     <div style={{ backgroundColor: '#FECB2F', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
//       <h2>Bug Search Page</h2>
//       <form>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Program &nbsp;
//             <select>
//               <option>ALL</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Report Type &nbsp;
//             <select>
//               <option>ALL</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Severity &nbsp;
//             <select>
//               <option>ALL</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Functional Area &nbsp;
//             <select>
//               <option>ALL</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Assigned To &nbsp;
//             <select>
//               <option>ALL</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Reported By &nbsp;
//             <select>
//               <option>ALL</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Status &nbsp;
//             <select>
//               <option>Open</option>
//               <option>Closed</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Priority &nbsp;
//             <select>
//               <option>ALL</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ marginBottom: '20px' }}>
//           <label>Resolution &nbsp;
//             <select>
//               <option>ALL</option>
//             </select>
//           </label>
//         </div>

//         <Link to="/bugs/results">
//             <button type="submit" style={{ marginRight: '10px' }}>Search</button>
//         </Link>        
//         <button type="reset" style={{ marginRight: '10px' }}>Reset</button>
//         <button type="button">Cancel</button>
//       </form>
//     </div>
//   );
// }

// export default BugSearchForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BugSearchForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ status: 'Open' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can pass query params or state
    navigate('/bugs/results', { state: formData });
  };

  return (
    <div style={{ backgroundColor: '#FECB2F', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      <h2>Bug Search Page</h2>
      <form onSubmit={handleSubmit}>
        {['Program', 'Report Type', 'Severity', 'Functional Area', 'Assigned To', 'Reported By', 'Priority', 'Resolution'].map(field => (
          <div key={field} style={{ marginBottom: '10px' }}>
            <label>{field}&nbsp;
              <select name={field.toLowerCase().replace(/\s+/g, '')} onChange={handleChange}>
                <option>ALL</option>
              </select>
            </label>
          </div>
        ))}

        <div style={{ marginBottom: '20px' }}>
          <label>Status &nbsp;
            <select name="status" onChange={handleChange}>
              <option>Open</option>
              <option>Closed</option>
            </select>
          </label>
        </div>

        <button type="submit" style={{ marginRight: '10px' }}>Search</button>
        <button type="reset" style={{ marginRight: '10px' }}>Reset</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default BugSearchForm;
