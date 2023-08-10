import React, { useState } from 'react';

const AuthToken = () => {
  const [token, setToken] = useState({});

    fetch("http://localhost:3000/api/authToken")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setToken(data); 
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  return (
    <div>
      
    </div>
  );
};

export default AuthToken;
