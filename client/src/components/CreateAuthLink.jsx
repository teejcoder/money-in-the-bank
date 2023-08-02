import React, { useState } from 'react'
import React from 'react'

function CreateAuthLink() {
  const [mobileNumber, setmobileNumber] = useState
    
  fetch("/createAuthLink")
  .then(response => response.json()) 
  .then(data => {
    console.log(data); 
    })
  .catch((error) => {
    console.error(error);
  });
    

  return (
    <div>
      <form>
        <input type="number" />
      </form>

      <button onClick={createAuthLink} className='btn btn-primary'>Create auth link</button>
    </div>
  )
}
export default CreateAuthLink