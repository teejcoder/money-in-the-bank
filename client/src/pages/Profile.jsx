import React, { useEffect, useState } from "react";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function Profile (){
    const [profile, setProfile] = useState({
        
    })

    useEffect(() => {
        fetch("/profile").then(
          response => response.json()
        ).then(
          data => {
            setProfile(data)
            console.log(data)
          }
        )
    }, [])

    return (
    <>
    <Header />
    <Sidebar />
    </>

    )
};

export default Profile;

