import React, { useEffect } from 'react';
import axios from 'axios';

export default function AuthLink() {
  useEffect(() => {
    // Fetch data
    axios
      .get('http://localhost:3000/api/createAuthLink') // Update the URL
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>

    </div>
  );
}
