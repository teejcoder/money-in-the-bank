import React, { useEffect, useState } from "react";

function Header () {
    const [userName, setUserName] =  useState({

    })

    useEffect(() => {
        fetch("/profile").then(
          response => response.json()
        ).then(
          data => {
            setUserName(data)
            console.log(data)
          }
        )
    }, [])


    return (
        <>
        <section className="navbar">
            <h1>hello </h1>
            <button>LOG OUT</button>
        </section>
        </>
    )
}

export default Header