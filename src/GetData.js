import React,{useState,useEffect} from 'react'
import axios from 'axios'
const GetData = () => {
    const[data,setData]=useState([])
    const [use,setUser]=useState(1)
    useEffect(()=>{
        // axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("https://dummyjson.com/c/b1e5-45ac-4e27-ae4e")
        // .then((res)=> console.log(res.data))
        .then((res)=>{setData(res.data)})
    },[])         
  return (
    <div>
      GET DATA
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>ID</th>
            </tr>
        </thead>
      
      {data.map((i)=>{
        return(
            <>
            <tbody>
                <tr>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                     <td>{i.id}</td>
                </tr>
            </tbody>
            </>
        )
      })}
      </table>
    </div>
  )
}

export default GetData
