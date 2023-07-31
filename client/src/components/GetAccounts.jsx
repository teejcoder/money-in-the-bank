import React from 'react'

export default function GetAccounts() {
    fetch("/getAccounts")
    .then(response => response)
    .then(data => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
        GetAccounts
        <button onClick={getAccounts} className='btn btn-primary'>get accounts</button>
    </div>
  )
}
