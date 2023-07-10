import { useState } from 'react';

function Bankcard() {
  const [auth, setAuth] = useState({});

const handleAuth = () => {
  fetch("/authFlow")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setAuth(data);
    })
    .catch((error, response) => {
      console.log(error);
      console.log("Response:", response);
    });
};;

  return (
    <>
      <section className="bankcard">

        <h2>It looks a bit empty here..</h2>
        
        <button onClick={handleAuth} className='btn btn-primary'>Connect Bank</button>

      </section>
    </>
  );
}

export default Bankcard;
