import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function AccessToken() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {

    axios.get('http://localhost:3000/api/authToken')
      .then(response => {
        if (response.data.authToken) {
          axios.defaults.headers.common['Authorization'] = response.data.authToken;
          setAccessToken(response.data.authToken);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);


  return (
    <div></div>
  )
}
