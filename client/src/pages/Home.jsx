import Login from "./Login";

const Home = () => {

    return (
        <>
        <section className="loginContainer">
            <section className="buttonContainer">

                <button className="loginButton" onClick={Login}>Login</button>
                <button className="signupButton">Signup</button>

            </section>
        </section>
        </>
    )
}

export default Home;