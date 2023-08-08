import React, { useEffect, useState } from 'react'

const AuthToken = () => {
  const [token, setToken] = useState({})

  useEffect(() => {
    fetch("/api/authToken").then(
      response => response.json()
    ).then(
      data => {
        setToken(data)
        console.log(data)
      }
    )
  }, [])

  const handleClick = () => {
    
  }


  return (
    <div>
      <button onClick={handleClick}>connect bank</button>
    </div>
  )
}

export default AuthToken;