import React, { useEffect, useState } from 'react'

export default function AuthToken() {
    const [authToken, setAuthToken] = useState();

    useEffect(() => {
      fetch("/api/authToken")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setAuthToken(data);
        });
    }, []);
  return (
    <div>AuthToken</div>
  )

}
