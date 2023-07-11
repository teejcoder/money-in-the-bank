import { useState } from 'react';

function Bankcard() {
  const [auth, setAuth] = useState({});

  const handleAuth = () => {
    fetch("/authFlow")
      .then((response) => response.json())
      .then((data) => {
        setAuth(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
