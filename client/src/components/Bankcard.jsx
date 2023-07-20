import { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

function Bankcard() {
  const [auth, setAuth] = useState();
  const [authLink, setAuthLink] = useState({});

  // USE THIS USEEFFECT HOOK TO GET AUTHTOKEN DATA & MAKE USER?
  // useEffect(() => {
  //   fetch("/getAuthToken").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setUser(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

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
    .then(response => response.json()) 
    .then(data => {
      console.log(data); 
    })
    .catch((error) => {
      console.error(error);
    });

  }


    const getBasiqUser = (res, req) => {
      fetch("/getBasiqUser")
      .then(response => response.json()) 
      .then(data => {
        console.log(data); 
        console.log(res)
      })
      .catch((error) => {
        console.error(error);
      });
    }



  return (
    <>
      <section className="bankcard">

        <h2>It looks a bit empty here..</h2>
        
        <button onClick={authToken} className='btn btn-primary'>Connect Bank</button>
        <button onClick={getBasiqUser} className='btn btn-primary'>get basiq user</button>
        <button onClick={createBasiqUser} className='btn btn-primary'>Create basiq user</button>
        <button onClick={createAuthLink} className='btn btn-primary'>Create auth link</button>

      </section>
    </>
  );
}

export default Bankcard;
