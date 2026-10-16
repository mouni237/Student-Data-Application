import React from 'react'
import './Student.css'
function Student({ student} ) {
  return (
    <div className='student'>
      <h2>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Department: {student.department}</p>
    </div>
  );
}

export default Student;