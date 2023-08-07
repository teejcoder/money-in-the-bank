import React, { useEffect, useState } from 'react'

const AuthToken = () => {
  const [token, setToken] = useState({})

  useEffect(() =>{
    const url = "http://localhost:3000/api/authToken"
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };

  fetchData();
  
  }, [])
  
  return (
    <div>
      <button>connect bank</button>
    </div>
  )
}

export default AuthToken