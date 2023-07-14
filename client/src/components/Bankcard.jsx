import { useState } from 'react';

function Bankcard() {
  const [auth, setAuth] = useState({});
  const [authLinkData, setAuthLinkData] = useState({});

  const authToken = () => {
    fetch("/authToken")
      .then((response) => response)
      .then((data) => {
        setAuth(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createBasiqUser = () => {
    fetch("/createBasiqUser")
      .then((response) => response)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createAuthLink = () => {
    fetch("http://localhost:3001/createAuthLink")
      .then((response) => response.json())
      .then((data) => {
        setAuthLinkData(data);
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
        {authLinkData && (
          <p>{authLinkData.links && authLinkData.links.public}</p>
        )}
        <button onClick={authToken} className="btn btn-primary">
          Connect Bank
        </button>
        <button onClick={createBasiqUser} className="btn btn-primary">
          Create basiq user
        </button>
        <button onClick={createAuthLink} className="btn btn-primary">
          Create auth link
        </button>
      </section>
    </>
  );
}

export default Bankcard;