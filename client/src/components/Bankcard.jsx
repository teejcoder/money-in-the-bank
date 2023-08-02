import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import useNavigate from react-router-dom

function Bankcard() {
  const [auth, setAuth] = useState();
  const [render, setRender] = useState(false);

  const authToken = () => {
    fetch("/authToken")
      .then(response => response)
      .then(data => {
        setAuth(data);
        console.log(data);

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="bankcard">

        <h2>It looks a bit empty here..</h2>
        
        Connect Bank
        <Link>
        <button onClick={authToken} className='btn btn-primary'>Connect Bank</button>
        </Link>
        
      </section>
    </>
  );
}

export default Bankcard;