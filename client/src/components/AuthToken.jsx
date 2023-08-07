import React, { useEffect, useState } from 'react'

export default function AuthToken() {
    const [authTokenLink, setAuthTokenLink] = useState({});

    useEffect(() => {
      fetch('/api/authToken')
        .then(res => {
        setAuthTokenLink(res.data)
      })
    }, []);
  return (
    <div>AuthToken</div>
  )

}
