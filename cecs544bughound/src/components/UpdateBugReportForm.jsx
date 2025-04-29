import React from 'react';

function UpdateBugReportForm () {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #c0d8ff, #6ca6f8)', color: 'black', padding: '20px', fontFamily: 'Arial', minHeight: '100vh' }}>
      <h2>Update Bug Page for bug #105</h2>

      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Program &nbsp;
            <input type="text" value="FIDE - 1 - 1" readOnly style={{ width: '200px' }} />
          </label>
          &nbsp;&nbsp;
          <label>Report Type &nbsp;
            <select>
              <option>Suggestion</option>
              <option>Bug</option>
            </select>
          </label>
          &nbsp;&nbsp;
          <label>Severity &nbsp;
            <select>
              <option>Minor</option>
              <option>Major</option>
              <option>Fatal</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Summary &nbsp;
            <input type="text" defaultValue="Enhance visual experience of IDE" style={{ width: '400px' }} />
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
            <textarea rows="3" cols="90" defaultValue="FIDE's appearance could use some updating" />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Reported By &nbsp;
            <input type="text" value="Mike" readOnly />
          </label>
          &nbsp;&nbsp;
          <label>Date &nbsp;
            <input type="date" value="2019-01-27" readOnly />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Functional Area &nbsp;
            <select><option>Area 1</option></select>
          </label>
          &nbsp;&nbsp;
          <label>Assigned To &nbsp;
            <select><option>Mike</option></select>
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Suggested Fix<br />
            <textarea rows="2" cols="90" />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Comments<br />
            <textarea rows="2" cols="90" />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Status &nbsp;
            <select>
              <option>Open</option>
              <option>Closed</option>
            </select>
          </label>
          &nbsp;&nbsp;
          <label>Priority &nbsp;
            <select>
              <option>Fix Immediately</option>
              <option>Fix Later</option>
            </select>
          </label>
          &nbsp;&nbsp;
          <label>Resolution &nbsp;
            <select>
              <option>Pending</option>
              <option>Fixed</option>
            </select>
          </label>
          &nbsp;&nbsp;
          <label>Resolution version &nbsp;
            <input type="text" />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Resolved By &nbsp;
            <input type="text" />
          </label>
          &nbsp;&nbsp;
          <label>Date &nbsp;
            <input type="date" />
          </label>
          &nbsp;&nbsp;
          <label>Tested By &nbsp;
            <input type="text" />
          </label>
          &nbsp;&nbsp;
          <label>Date &nbsp;
            <input type="date" />
          </label>
          &nbsp;&nbsp;
          <label>Treat as deferred? &nbsp;
            <select><option>Yes</option><option>No</option></select>
          </label>
        </div>

        <div style={{ marginTop: '20px' }}>
          <button type="submit" style={{ marginRight: '10px' }}>Submit</button>
          <button type="button" style={{ marginRight: '10px' }}>Home</button>
          <button type="button">Add Attachment</button>
        </div>

        <div style={{ marginTop: '15px' }}>
          <label>Attachments &nbsp;
            <select><option>None</option></select>
          </label>
          <div style={{ marginTop: '10px' }}>
            <input type="file" />
            <button type="button" style={{ marginLeft: '10px' }}>Add Attachment</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateBugReportForm;
