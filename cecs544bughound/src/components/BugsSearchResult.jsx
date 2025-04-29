import React from 'react';
import { useLocation } from 'react-router-dom';

function BugSearchResults () {
  const { state } = useLocation();

  // Mock result data should fill up with data from database
  const results = [
    { id: 105, program: 'FIDE-1-1', summary: 'UI improvement', status: 'Open' },
    { id: 106, program: 'Bughound-2-1', summary: 'Crash when loading file', status: 'Closed' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h2>Bug Search Results</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', backgroundColor: '#fff' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Program</th>
            <th>Summary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results
            .filter(r => state?.status === 'ALL' || r.status === state?.status)
            .map((bug) => (
              <tr key={bug.id}>
                <td>{bug.id}</td>
                <td>{bug.program}</td>
                <td>{bug.summary}</td>
                <td>{bug.status}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BugSearchResults;
