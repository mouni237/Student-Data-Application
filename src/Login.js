
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    dob: "",
    gender: "",
    registerNo: "",
    email: "",
    mobile: "",
    parentMobile: "",
    community: "",
    firstGraduate: "",
    address: "",
    city: "",
    district: "",
    state: "",
    course: "",
    referredBy: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Admission enquiry submitted successfully!");
    console.log(form);
  }

  return (
    <div className="admission-page">
      <div className="admission-banner">
        
        <h1>LEARN &<br />DISCOVER.</h1>
       
      </div>

      <div className="form-container">
        <div className="form-heading">
          
          <h2>ONLINE ADMISSION </h2>
          
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label>Name</label>
              <input name="name" placeholder="Enter your name"
                value={form.name} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Father Name</label>
              <input name="fatherName" placeholder="Father name"
                value={form.fatherName} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Gender</label>
              <select name="gender" value={form.gender}
                onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email address"
                value={form.email} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Mobile Number</label>
              <input type="tel" name="mobile" placeholder="10-digit mobile number"
                pattern="[0-9]{10}" value={form.mobile}
                onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Parent Mobile Number</label>
              <input type="tel" name="parentMobile"
                placeholder="Parent mobile number"
                pattern="[0-9]{10}" value={form.parentMobile}
                onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Address</label>
              <input name="address" placeholder="address"
                value={form.address} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>City </label>
              <input name="city" placeholder="City or town"
                value={form.city} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>District</label>
              <input name="district" placeholder="District"
                value={form.district} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>State</label>
              <select name="state" value={form.state}
                onChange={handleChange} required>
                <option value="">Select State</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Karnataka</option>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field">
              <label>Course </label>
              <select name="course" value={form.course}
                onChange={handleChange} required>
                <option value="">Select Course</option>
                <option>B.E. Computer Science</option>
                <option>B.Tech AI & Data Science</option>
                <option>B.E. Electronics</option>
                <option>B.E. Mechanical</option>
                <option>B.Tech Information Technology</option>
                <option>MBA</option>
                <option>Other</option>
              </select>
            </div>

          </div> 

          <button type="submit" className="submit-btn">
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
