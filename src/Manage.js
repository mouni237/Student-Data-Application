
import React,{useState} from "react"

const Manage=()=>{

const [task,setTask]=useState({name:""})
const [tasks,setTasks]=useState([])
const [dark,setDark]=useState(false)
const [show,setShow]=useState(false)
const [del,setDel]=useState(null)

function change(e){
 setTask({...task,name:e.target.value})
}

function add(e){
 e.preventDefault()

 if(!task.name)return

 setTasks([...tasks,{
  id:Date.now(),
  name:task.name,
  completed:false
 }])

 setTask({name:""})
}

function status(id){
 setTasks(tasks.map(t=>
  t.id===id?{...t,completed:!t.completed}:t
 ))
}

function remove(){
 setTasks(tasks.filter(t=>t.id!==del))
 setDel(null)
}

const completed=tasks.filter(t=>t.completed)

return(
<div style={{
 padding:"15px",
 minHeight:"100vh",
 background:dark?"#222":"#eee",
 color:dark?"white":"black"
}}>

<h2>📝 Task Manager</h2>

<button onClick={()=>setDark(!dark)}>
 {dark?"☀️ Light":"🌙 Dark"}
</button>

<form onSubmit={add}>

<input
 placeholder="Enter Task"
 value={task.name}
 onChange={change}
/>

<button>Add</button>

</form>

<h3>Total Tasks: {tasks.length}</h3>

<h3>All Tasks</h3>

{tasks.length?
 tasks.map(t=>(
  <p key={t.id}>
   {t.name} - {t.completed?"Completed":"Pending"}

   <button onClick={()=>status(t.id)}>
    {t.completed?"Pending":"Completed"}
   </button>

   <button onClick={()=>setDel(t.id)}>
    Delete
   </button>
  </p>
 ))
 :<p>No tasks</p>
}

<h3>Completed Tasks</h3>

{completed.map(t=>(
 <p key={t.id}>{t.name}</p>
))}

<h3>How to use this app?</h3>

<button onClick={()=>setShow(!show)}>
 {show?"Hide":"Show"}
</button>

{show&&
 <p>
  Enter a task, click Add and change its status.
 </p>
}

{del!==null&&
 <div style={{
  position:"fixed",
  top:"40%",
  left:"35%",
  background:"white",
  color:"black",
  padding:"15px"
 }}>

 <p>Are you sure?</p>

 <button onClick={remove}>Delete</button>

 <button onClick={()=>setDel(null)}>Cancel</button>

 </div>
}

</div>
)
}

export default Manage

