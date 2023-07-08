import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = ({ messages }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber:"",
    password: "",
  });
  const navigate = useNavigate();
 
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

   // This function will handle the submission.
 async function onSubmit(e) {
  e.preventDefault();

  // When a post request is sent to the create url, we'll add a new record to the database.
  const newPerson = { ...form };

  await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ firstName: "", lastName: "", email: "", phoneNumber: "", password:"" });
  navigate("/profile");
}


  return (
    <section className="signupContainer">
      <section className="signupForm">
        {messages && messages.errors && messages.errors.map((el, index) => (
          <div key={index} className="alert alert-danger">{el.msg}</div>
        ))}
        {messages && messages.info && messages.info.map((el, index) => (
          <div key={index} className="alert alert-info">{el.msg}</div>
        ))}

        <form onSubmit={onSubmit}>
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
