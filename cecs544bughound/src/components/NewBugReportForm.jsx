import React from 'react';

function NewBugReportForm () {
  return (
    <div style={{ backgroundColor: '#5c5c5c', color: 'white', padding: '20px', fontFamily: 'Arial', width: '100%', minHeight: '100vh' }}>
      <h2>New Bug Report Entry Page</h2>

      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Program &nbsp;
            <input type="text" value="Bughound - 1 - 1" readOnly style={{ width: '200px' }} />
          </label>
          &nbsp;&nbsp;
          <label>Report Type &nbsp;
            <select>
              <option value="Coding Error">Coding Error</option>
              <option value="Design Issue">Design Issue</option>
              <option value="Hardware">Hardware</option>
            </select>
          </label>
          &nbsp;&nbsp;
          <label>Severity &nbsp;
            <select>
              <option value="Fatal">Fatal</option>
              <option value="Major">Major</option>
              <option value="Minor">Minor</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Problem Summary &nbsp;
            <input type="text" style={{ width: '400px' }} />
          </label>
          &nbsp;&nbsp;
          <label>Reproducible? &nbsp;
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Problem<br />
            <textarea rows="3" cols="90" />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Reported By &nbsp;
            <input type="text" value="Mike" readOnly />
          </label>
          &nbsp;&nbsp;
          <label>Date &nbsp;
            <input type="date" value="2020-01-31" readOnly />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Functional Area &nbsp;
            <select><option>Area</option></select>
          </label>
          &nbsp;&nbsp;
          <label>Assigned To &nbsp;
            <select><option>User</option></select>
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Comments<br />
            <textarea rows="3" cols="90" />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Status &nbsp;
            <select>
              <option>Open</option>
              <option>Closed</option>
              <option>Resolved</option>
            </select>
          </label>
          &nbsp;&nbsp;
          <label>Priority &nbsp;
            <input type="text" />
          </label>
          &nbsp;&nbsp;
          <label>Resolution &nbsp;
            <input type="text" />
          </label>
          &nbsp;&nbsp;
          <label>Resolution version &nbsp;
            <input type="text" />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Resolved by &nbsp;
            <input type="text" />
          </label>
          &nbsp;&nbsp;
          <label>Date &nbsp;
            <input type="date" />
          </label>
          &nbsp;&nbsp;
          <label>Tested by &nbsp;
            <input type="text" />
          </label>
          &nbsp;&nbsp;
          <label>Date &nbsp;
            <input type="date" />
          </label>
          &nbsp;&nbsp;
          <label>Treat as? &nbsp;
            <select><option>Yes</option><option>No</option></select>
          </label>
        </div>

        <div style={{ marginTop: '20px' }}>
          <button type="submit" style={{ marginRight: '10px' }}>Submit</button>
          <button type="reset" style={{ marginRight: '10px' }}>Reset</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default NewBugReportForm;
