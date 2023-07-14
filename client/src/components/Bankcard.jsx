import { useState } from 'react';

function Bankcard() {
  const [auth, setAuth] = useState({});

  const authToken = () => {
    fetch("/authToken")
      .then(response => response)
      .then(data => {
        setAuth(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createBasiqUser = () => {
    fetch("/createBasiqUser")
      .then(response => response.json())
      .then(data => {
        setAuth(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

const createAuthLink = () => {
  fetch("/createAuthLink")
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      console.log(data); // Log the parsed response data
    })
    .catch((error) => {
      console.error(error);
    });
};


  return (
    <>
      <section className="bankcard">

        <h2>It looks a bit empty here..</h2>
        
        <button onClick={authToken} className='btn btn-primary'>Connect Bank</button>
        <button onClick={createBasiqUser} className='btn btn-primary'>Create basiq user</button>
        <button onClick={createAuthLink} className='btn btn-primary'>Create auth link</button>

      </section>
    </>
  );
}

export default Bankcard;
