import React from 'react'
import { useState } from 'react';

function Bankcard() {
  const [auth, setAuth] = useState();

  const authToken = async () => {
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
        <button onClick={authToken} className='btn btn-primary'>Connect Bank</button>

      </section>
    </>
  );
}

export default Bankcard;