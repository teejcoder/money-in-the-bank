import React, { useEffect, useState } from 'react'

export default function AuthToken() {
    const [auth, setAuth] = useState();

    useEffect(() => {
      fetch("/api/authToken")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setAuth(data);
        });
    }, []);
  return (
    <div>AuthToken</div>
  )

}
