import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Signup = ({ messages }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/signup").then(
      response => response.json()
    ).then(
      data => {
        setUser(data)
        console.log(data)
      }
    )
  }, [])


  return (
    <section className="signupContainer"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/abstract-white-color-canvas-wallpaper-textures-surface_74190-6376.jpg?w=2000&t=st=1688908160~exp=1688908760~hmac=5137b20a4f17f3b5317beeb0d3bc282894c838569707b01fde1b6a1dad2cd1f2')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    }}>
      
      <section className="signupForm">
        {messages && messages.errors && messages.errors.map((el, index) => (
          <div key={index} className="alert alert-danger">{el.msg}</div>
        ))}
        {messages && messages.info && messages.info.map((el, index) => (
          <div key={index} className="alert alert-info">{el.msg}</div>
        ))}

        <h1>Sign Up</h1>

        <form action="/signup" method="POST">
          <div className="mb-3">
            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" />
          </div>
          <div className="mb-3">

            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" placeholder="Email Address" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="0412 345 678" />
            <div id="phoneNumber" className="form-text">We'll never share your number with anyone else.</div>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
          </div>

          <button type="submit" className="btn btn-primary">Create User</button>
          
          <Link to="/login">
            <button className="btn-primary">Login</button>
          </Link>

        </form>
      </section>
    </section>
  );
};

export default Signup;
