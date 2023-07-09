import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ messages }) => {

  return (
    <section className="loginContainer">
      <section className="loginForm">
        {messages && messages.errors && messages.errors.map((el, index) => (
          <div key={index} className="alert alert-danger">{el.msg}</div>
        ))}
        {messages && messages.info && messages.info.map((el, index) => (
          <div key={index} className="alert alert-info">{el.msg}</div>
        ))}

        <form action="/login" method="POST">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              placeholder='Email Address'
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder='Password'
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <Link to="/signup">
            <button className="btn-primary">Signup</button>
          </Link>

        </form>
      </section>
    </section>
  );
};

export default Login;
