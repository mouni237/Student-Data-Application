import React,{useState} from 'react' 
const Task1 = () => { 
  const [value,setValue]=useState(0); 
  const [input,setInput]=useState(""); 
  
  function inc(){ 
    setValue(value==0?1:0) 
  } 
  function char(event){ 
    // setInput(input==0?1:"") 
    // console.log(event.target.value) 
    setInput(event.target.value) 
  } 
  console.log((Math.random * 10000) +1)
  return ( 
    <div> 
      <div style={{backgroundColor:value?"pink":"grey",height:"100vh"}}> 
         <h3>Theme Changer</h3><br></br>
         <h4>Random number generator</h4> 
        <input type="text" placeholder="Character" onChange={char} value={input}></input><br></br> 
          <p>Input:{input}</p> 
         <p>{input.length}</p> 
        <button onClick={inc}>{value?"Dark":"Light"}</button> 
      </div> 
    </div> 
  ) 
  }

export default Task1
