import { useState } from 'react';
// import { LuLogOut } from 'react-icons/lu';

function Bankcard() {
//   const [logoutStatus, setLogoutStatus] = useState(false);

//   const handleLogout = () => {
//     fetch("/logout")
//       .then((response) => response.json())
//       .then((data) => {
//         setLogoutStatus(data.logout);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

  return (
    <>
      <section className="bankcard">

        <h2>It looks a bit empty here..</h2>
        
        <button className='btn btn-primary'>Connect Bank</button>

      </section>
    </>
  );
}

export default Bankcard;
