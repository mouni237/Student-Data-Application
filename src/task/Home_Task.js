
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Contact_Task from './Contact_Task';
import Accordian_Task from './Accordian_Task';
import About_Task from './About_Task';
import Login_Task from './Login_Task';
import Projects_Task from './Projects_Task';
import Skills_Task from './Skills_Task';

import './Home_Task.css';

function Home_Task() {
  return (
    <Routes>
      <Route
        path="/Login_Task"
        element={<Login_Task />}
      />

      <Route
        path="*"
        element={
          <div className="portfolio-home">

            <nav className="navbar">
              <h2>Mounika <span>S</span></h2>

              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/About_Task">About</Link>
                <Link to="/Projects_Task">Projects</Link>
                <Link to="/Skills_Task">Skills</Link>
                <Link to="/Accordian_Task">Accordion</Link>
                <Link to="/Contact_Task">Contact</Link>
                <Link to="/Login_Task">Login</Link>
              </div>
            </nav>

            <Routes>
              <Route
                path="/"
                element={
                  <div className="hero-section">
                    <p className="hello">HELLO, I'M</p>

                    <h1>
                      Mounika <span>S</span>
                    </h1>

                    <h3>Web Developer | Student</h3>

                    <p className="description">
                      I'm passionate about learning new technologies
                      and building creative web applications.
                    </p>

                    <Link
                      to="/About_Task"
                      className="start-button"
                    >
                      About Me
                    </Link>
                  </div>
                }
              />

              <Route
                path="/About_Task"
                element={<About_Task />}
              />

              <Route
                path="/Projects_Task"
                element={<Projects_Task />}
              />

              <Route
                path="/Skills_Task"
                element={<Skills_Task />}
              />

              <Route
                path="/Accordian_Task"
                element={<Accordian_Task />}
              />

              <Route
                path="/Contact_Task"
                element={<Contact_Task />}
              />
            </Routes>

          </div>
        }
      />
    </Routes>
  );
}

export default Home_Task;
