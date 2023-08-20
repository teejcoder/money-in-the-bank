import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>  
    <section className="loginContainer"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/abstract-white-color-canvas-wallpaper-textures-surface_74190-6376.jpg?w=2000&t=st=1688908160~exp=1688908760~hmac=5137b20a4f17f3b5317beeb0d3bc282894c838569707b01fde1b6a1dad2cd1f2')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
            }}
    >

      <section className="buttonContainer">
        <h1>Money in the Bank</h1>
        <Link to="/login">
        <button className="loginButton">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signupButton">Signup</button>
        </Link>
      </section>
    </section>
    </>
  );
}

export default Home;
