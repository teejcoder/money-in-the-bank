import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateBasiqUser() {

  function handleClick(){
    console.log('createBasiqUser component event handler clicked')
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <label htmlFor='name' />
        <input type='text'>

        </input>


      </form>
    </>
  )
}
