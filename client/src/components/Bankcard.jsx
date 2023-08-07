import React, { useEffect, useState } from 'react'
import AuthToken from './AuthToken';

function Bankcard() {

  function handleAuthToken(){
    return fetch({AuthToken})
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