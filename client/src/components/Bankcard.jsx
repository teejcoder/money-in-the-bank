import { useState } from 'react';
// import { LuLogOut } from 'react-icons/lu';

function Bankcard() {
  const [auth, setAuth] = useState({});

  const handleAuth = () => {
    fetch("/authFlow")
      .then((response) => response.json())
      .then((data) => {
        setAuth(data);
      })
      .catch((error) => {
        console.log(error);
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
