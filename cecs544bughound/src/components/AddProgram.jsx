import React, { useState } from 'react';

function AddProgram() {
  const [programName, setProgramName] = useState('');
  const [programRelease, setProgramRelease] = useState('');
  const [programVersion, setProgramVersion] = useState('');

  const programs = [
    { name: 'Bughound', release: '1', version: '1' },
    { name: 'C Coder', release: '1', version: '1' },
    { name: 'C Coder', release: '1', version: '1' },
    { name: 'COBOL Coder', release: '0', version: '0' },
    { name: 'FIDE', release: '1', version: '1' },
    { name: 'Jimmys Program', release: '1', version: '1' },
    { name: 'Mapstar', release: '1', version: '1' },
    { name: 'Pascal Coder', release: '0', version: '0' },
    { name: 'Wordbank 2000', release: '1', version: '1' },
    { name: 'Wordbank 2000', release: '2', version: '1' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a backend
    console.log({ programName, programRelease, programVersion });
    // Reset the form fields
    setProgramName('');
    setProgramRelease('');
    setProgramVersion('');
  };

  return (
    <div>
      <h2>Add a Program</h2>

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
              <td>{program.name}</td>
              <td>{program.release}</td>
              <td>{program.version}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
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
          <select
            id="programRelease"
            value={programRelease}
            onChange={(e) => setProgramRelease(e.target.value)}
          >
            <option value="">Select Release</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div>
          <label htmlFor="programVersion">Program Version</label>
          <select
            id="programVersion"
            value={programVersion}
            onChange={(e) => setProgramVersion(e.target.value)}
          >
            <option value="">Select Version</option>
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </div>

        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

export default AddProgram;