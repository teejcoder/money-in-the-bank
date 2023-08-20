import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConnectBank from './ConnectBank';

function Bankcard({children}) {
  const [showAuthToken, setShowAuthToken] = useState(false);

  useEffect(() => {
    // Fetch data
    axios.get('http://localhost:3000/api/authToken')
      .then(response => {
        console.log(response.data);

        if (response.data.authToken) {
          axios.defaults.headers.common['Authorization'] = response.data.authToken;
          setShowAuthToken(true);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  function handleClick() {
    console.log('connect bank clicked in BankCard component');
  }

  return (
    <section className="bankcard">
      <h2>It looks a bit empty here..</h2>
      <div>
        <button onClick={handleClick}>
          Connect Bank
        </button>
      </div>

    </section>
  );
}

export default Bankcard;
