import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ messages }) => {

  return (
    <section className="loginContainer"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/abstract-white-color-canvas-wallpaper-textures-surface_74190-6376.jpg?w=2000&t=st=1688908160~exp=1688908760~hmac=5137b20a4f17f3b5317beeb0d3bc282894c838569707b01fde1b6a1dad2cd1f2')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    }}>
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
