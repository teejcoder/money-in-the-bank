import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'

function Home() {
  return (
    <section className="loginContainer">
      <section className="buttonContainer">
        <Link to="/login">
          <button className="loginButton">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signupButton">Signup</button>
        </Link>
      </section>
    </section>
  );
}

export default Home;
