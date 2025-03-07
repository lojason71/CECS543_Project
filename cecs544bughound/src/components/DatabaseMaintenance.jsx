import React from 'react';
import { Link } from "react-router-dom";

function DatabaseMaintenance() {
  return (
    <div 
      style={{ 
        backgroundColor: '#F0E68C', 
        fontFamily: 'Arial, sans-serif', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',  /* Take full viewport height */
        width: '100%',  /* Take full width */
        padding: '20px',
        boxSizing: 'border-box',  /* Prevent padding from shrinking the container */
      }}
    >
      <h1>Database Maintenance</h1>
      <div style={{ marginTop: '20px' }}>
        <Link to="/areas/edit-add" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue' }}>
          Edit / Add Areas
        </Link>
        <Link to="/programs/add" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue' }}>
          Add Programs
        </Link>
        <Link to="/programs/edit" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue' }}>
          Edit Programs
        </Link>
        <Link to="/employees/add" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue' }}>
          Add Employees
        </Link>
        <Link to="/employees/edit" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue' }}>
          Edit Employees
        </Link>
        <Link to="/areas/export" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue' }}>
          Export Areas
        </Link>
      </div>
      <button style={{ marginTop: '20px' }}>Cancel</button>
    </div>
  );
}

export default DatabaseMaintenance;
