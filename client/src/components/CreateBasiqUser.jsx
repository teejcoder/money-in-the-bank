import React from 'react'

function CreateBasiqUser() {
    
    fetch("/createBasiqUser")
        .then(response => response.json())
        .then(data => {
            // setAuth(data);
        console.log(data);
            })
        .catch((error) => {
            console.error(error);
    });

  return (
    <div>
        CreateBasiqUser
        <button onClick={createBasiqUser} className='btn btn-primary'>Create basiq user</button>
    </div>
    
  );
}
export default CreateBasiqUser