import React from 'react'
function Object(){

const student=
        {Name:"MOUNI",id:1,Age:19,dept:"AI & DS"}
        // {Name:"HARSHU",id:2,Age:19,dept:"CYBER"},
        // {Name:"SELVA",id:3,Age:19,dept:"IT"},
        // {Name:"NESI",id:4,Age:19,dept:"B.Tech"},
        // {Name:"MOULI",id:5,Age:19,dept:"AI"},
        // {Name:"MOUNISH",id:6,Age:20,dept:"ECE"},
        // {Name:"NISHA",id:7,Age:20,dept:"CSE"},
        // {Name:"MAHENDHIRAN",id:8,Age:20,dept:"ECE"},
        // {Name:"NEETHA",id:9,Age:19,dept:"B.Tech"},
        // {Name:"NIVI",id:10,Age:19,dept:"B.Tech"}
      
    const {Name,id,dept,Age,...remains}=student
    const updatedstudent={
        ...student,
        name:"Mounika"
    }
   console.log(student)
   
  return (
    <>
    <div>
      {student.Name}
      {student.id}
      {student.Age}
      {student.dept}

      </div>
    </>
    
  )
  
 }

export default Object
