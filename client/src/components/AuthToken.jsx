import React from 'react'
import { useEffect, useState } from 'react';

function AuthToken() {
  const [auth, setAuth] = useState();

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

}
export default Authtoken