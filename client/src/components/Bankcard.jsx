import React, { useEffect, useState } from 'react'
import AuthToken from './AuthToken';

function Bankcard() {

  async function handleAuthToken(){
    
    await fetch("/api/authToken")
  }

  return (
    <>
      <section className="bankcard">

        <h2>It looks a bit empty here..</h2>

        <button className='btn btn-primary' onClick={handleAuthToken}>Connect Bank</button>

      </section>
    </>
  );
}

export default Bankcard;