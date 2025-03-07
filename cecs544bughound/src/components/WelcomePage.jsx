import React from 'react';
import { Router, Routes, Route, Link } from "react-router-dom";

function WelcomePage() {

  return (
    <div style={{ backgroundColor: '#ADD8E6', padding: '20px', fontFamily: 'Arial, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Welcome to BugHound</h1>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/bugs/new" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue', fontSize: '1.2em' }}>
          Enter NEW Bug
        </Link>
        <Link to="/bugs/update" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue', fontSize: '1.2em' }}>
          Update EXISTING Bug
        </Link>
        <Link to="/db-maintenance" style={{ display: 'block', marginBottom: '10px', textDecoration: 'underline', color: 'blue', fontSize: '1.2em' }}>
          Database Maintenance
        </Link>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>User:</p>
      </div>
    </div>
  );
}

export default WelcomePage;