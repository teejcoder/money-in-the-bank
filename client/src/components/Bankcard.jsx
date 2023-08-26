import React, { useState } from 'react';
import AccessToken from './AccessToken';
import CreateBasiqUser from './CreateBasiqUser';

function Bankcard() {
  const [showCreateBasiqUser, setShowCreateBasiqUser] = useState(false);

  function handleClick() {
    console.log('Event Handler clicked in BankCard component');
    setShowCreateBasiqUser(true);
  }

  return (
    <section className="bankcard">
      <h2>It looks a bit empty here..</h2>
      <div>
        <AccessToken />

        <button onClick={handleClick}>
          Connect Bank
        </button>
      </div>
      
      {showCreateBasiqUser && <CreateBasiqUser />}
    </section>
  );
}

export default Bankcard;
