import React, { useEffect } from 'react';
import axios from 'axios'

export default function ConnectBank() {

    useEffect(() => {
      // Fetch data
      axios.get('http://localhost:3000/api/createBasiqUser') // Update the URL
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        
    }, []);

  return (
    <div>
        <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Submit Details</button>
        </form>
    </div>
  )
}
