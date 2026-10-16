
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects_Task.css';

const Project_Talk = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/c/97a4-36b7-45d4-a810")
      .then((res) => {
        const result = res.data;
        setData(Array.isArray(result) ? result : [result]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="projects">
      <h2>PROJECTS</h2>

      {data.map((i, index) => (
        <div className="project-card" key={index}>
          <h3>{i.title}</h3>
          <h4>Description:</h4>
          <p>{i.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project_Talk;
