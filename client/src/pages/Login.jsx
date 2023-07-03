import { useEffect, useState } from "react"


const Login = () =>{
    const [login, setLogin] = useState([]);

    useEffect(() => {
      fetch('/login')
        .then((response) => response.json())
        .then((data) => setLogin(data))
        .catch((error) => console.error(error));
    }, []);
  

    return (
        <>

        </>
    )

}

export default Login