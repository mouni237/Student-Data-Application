
import React from 'react';
import './About_Task.css';

function About_Task() {
  return (
    <div className="about-page">

      <h1>About <span>Me</span></h1>
      <p className="about-subtitle">
        Know More About Me
      </p>

      <div className="about-content">

        {/* <div className="about-image">
          <div className="about-circle">M</div>
        </div> */}

        <div className="about-details">
          <h2>I'm Mounika S</h2>
          <h3>Web Developer | Student</h3>

          <p>
            I'm a student at Muthayammal Engineering College,
            passionate about web development and learning
            new technologies.
          </p>

          <div className="about-info">
            <p><b>Role:</b> Student</p>
            <p><b>Location:</b> Rasipuram</p>
            <p><b>College:</b> Muthayammal Engineering College</p>
            <p><b>Interest:</b> Web Development</p>
          </div>

          <p>
            My goal is to improve my technical skills and
            build useful, creative web applications.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About_Task;
