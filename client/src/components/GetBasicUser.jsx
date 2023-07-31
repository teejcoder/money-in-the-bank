import React from 'react'

function GetBasicUser() {
    fetch("/getBasiqUser")
    .then(response => response.json()) 
    .then(data => {
      console.log(data); 
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
        GetBasicUser
        <button onClick={getBasiqUser} className='btn btn-primary'>get basiq user</button>
    </div>
  )
}
export default GetBasicUser