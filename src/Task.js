
import  {React ,useEffect, useState } from "react";

function Task() {

  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [priority, setPriority] = useState("Low");
  const [dark, setDark] = useState(false);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => {
        setName(data.name);
      });
  }, []);

  
  function addTask() {

    if (task === "") {
      alert("Enter task name");
    } else {

      let newTask = {
        id: Date.now(),
        name: task,
        priority: priority,
        completed: false
      };

      setTasks([...tasks, newTask]);
      setTask("");
    }
  }

  
  function deleteTask(id) {
    let result = tasks.filter(item => item.id !== id);
    setTasks(result);
  }

  
  function completeTask(id) {

    let result = tasks.map(item => {

      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }

      return item;
    });

    setTasks(result);
  }

  let completed = tasks.filter(item => item.completed).length;
  let pending = tasks.length - completed;

  return (

    <div style={{
      minHeight: "100vh",
      padding: "30px",
      backgroundColor: dark ? "#222" : "#f5f5f5",
      color: dark ? "white" : "black"
    }}>

      <h1>Task Management Dashboard</h1>

      <p>Welcome {name}</p>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <hr />

      <h2>Task Count</h2>

      <p>Total: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>

      <hr />

      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "5px"
        }}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "5px"
        }}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={addTask}>
        Add Task
      </button>

      <hr />

      <h2>My Tasks</h2>

      {tasks.map(item => (

        <div
          key={item.id}
          style={{
            backgroundColor: dark ? "#444" : "white",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "5px"
          }}
        >

          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => completeTask(item.id)}
          />

          <span
            style={{
              margin: "10px",
              textDecoration: item.completed
                ? "line-through"
                : "none"
            }}
          >
            {item.name}
          </span>

          <span
            style={{
              margin: "10px",
              color:
                item.priority === "High"
                  ? "red"
                  : item.priority === "Medium"
                  ? "orange"
                  : "green"
            }}
          >
            {item.priority}
          </span>

          <button onClick={() => deleteTask(item.id)}>
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default Task;

