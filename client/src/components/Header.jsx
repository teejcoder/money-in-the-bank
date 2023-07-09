import React, { useEffect, useState } from "react";

function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/profile")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="navbar">
        <h1>hello, {user.firstName}</h1>
      </section>
    </>
  );
}

export default Header;
