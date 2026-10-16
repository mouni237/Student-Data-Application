import React from 'react'
import './Login_Task.css'
function Login_Task() {
  return (
    <div className="login-page">
        <form className="login-card">
            <h2>Welcome Back!</h2>
            <p>Login to your account</p>
            <input type="email" placeholder="Email Id" required></input><br></br>
            <input type="password" placeholder="Password" required></input><br></br>
           <div className="remember"> <label><input type="checkbox"/>Remember me</label>
           <a href="#">Forget Password?</a>
           </div>
            <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}

export default Login_Task
