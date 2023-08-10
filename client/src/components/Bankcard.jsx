import React from 'react'
import AuthToken from './AuthToken'


function Bankcard() {

  function handleClick(){
    
    console.log('clicked')
 
    return (
       <div>  
        <AuthToken/>  
       </div>
    )
  }

  return (
    <>
      <section className="bankcard">

        <h2>It looks a bit empty here..</h2>
        <button onClick={handleClick}>Connect to your bank</button>

      </section>
    </>
  );
}

export default Bankcard;