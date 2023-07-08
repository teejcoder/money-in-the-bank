import React, { useEffect, useState } from "react";


const Signup = ({ messages }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber:"",
    password: "",
  });

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
    <section className="signupContainer">
      <section className="signupForm">
        {messages && messages.errors && messages.errors.map((el, index) => (
          <div key={index} className="alert alert-danger">{el.msg}</div>
        ))}
        {messages && messages.info && messages.info.map((el, index) => (
          <div key={index} className="alert alert-info">{el.msg}</div>
        ))}

        <form action="/signup" method="POST">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="+61 4XX XXX XXX" />
            <div id="phoneNumber" className="form-text">We'll never share your number with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default Signup;
