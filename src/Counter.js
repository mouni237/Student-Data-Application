import React,{useState,useEffect} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
    const btn={
        padding:"10px",
        borderradius:"10px",
        border:"none",
        margin:"5px",
        cursor:'pointer'

    }
//without dependencies
useEffect(()=>{
    document.title="counter"
},[])
//with dependencies
useEffect(()=>{
    document.titlt=count
},[count])
//empty dependencies
useEffect(()=>{
    console.log("every time")
})
useEffect(()=>{
    setCount(42)
})
  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h1>Count: {count}</h1>
        <button style={btn} onClick={()=>setCount(count+1)}>INCREMENT</button>
        <button style={btn} onClick={()=>setCount(count-1)}>Decrement</button>
        <button style={btn} onClick={()=>setCount(0)}>Rest</button>
      </div>
    </div>
  )
}

export default Counter
