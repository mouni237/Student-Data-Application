import React from 'react';
import StudentCard from './StudentCard'; 

function StudentList({ data }) {
  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}> 
      <div style={{ width: '40%', textAlign: 'center', border: '2px solid grey', minHeight: '100vh', padding: '10px' }}>
        { data.map((student) => (
          <div key={student.id}>
            <StudentCard student={student} /><br />
          </div>
        ))}
      </div>
      <div style={{ marginLeft: '20px' }}>
        <h3>Student Application Form</h3>
        <form style={{ width: '250px', border: '2px solid grey', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
}

export default StudentList;