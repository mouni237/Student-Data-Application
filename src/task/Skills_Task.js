
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills_Task.css';

function Skills_Task() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/c/26f8-6da5-4ece-925a")
      .then((res) => {
        const result = res.data;
        setData(Array.isArray(result) ? result : []);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="skills-page">
      <h2>MY SKILLS</h2>

      <div className="skills-container">
        {data.map((item) => (
          <div className="skill-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills_Task;



