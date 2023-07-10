import { useState, useEffect } from 'react';
import axios from 'axios';


function Bankcard() {
  const handleAuth = () => {
    axios
      .get("/authFlow")
      .then((response) => {
        console.log(response.data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


  return (
    <>
      <section className="bankcard">
        <h2>It looks a bit empty here..</h2>
        <button onClick={handleAuth} className="btn btn-primary">
          Connect Bank
        </button>
      </section>
    </>
  );
}

export default Bankcard;
