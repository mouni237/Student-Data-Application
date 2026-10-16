import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Input = () => {
 const[data,setData]=useState([])

useEffect(()=>{
    axios.get("https://dummyjson.com/c/e2d7-5698-4370-bbf7")

.then((res)=>{setData(res.data)})
    },[])
function inc(){
    if(data){
  console.log("Login Successfully")
    }
    else{
        console.log("Error")
    }
    
}
 
  return (
    <div>
      <form onSubmit={inc} >
       <input  type="text" placeholder="Username" required/> <br></br>
        <input  type="Password" placeholder="Password" required/><br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Input
