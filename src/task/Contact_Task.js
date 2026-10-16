
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact_Task.css';

function Contact_Task() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/c/c3e1-7f13-4dd8-9f25")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="contact-page">
      <h1>Contact <span>Me</span></h1>
      <p>Get in touch with me</p>

      <div className="contact-card">
        <h2>{data.name}</h2>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Phone:</b> {data.phone}</p>
        <p><b>Location:</b> {data.location}</p>
        <p>{data.message}</p>
      </div>
    </div>
  );
}

export default Contact_Task;
