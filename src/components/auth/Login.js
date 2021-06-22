import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./Login.css"


export const Login = () => {
    const username = useRef()
    const password = useRef()
    const existDialog = useRef()
    const invalidDialog = useRef()
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault()

        return fetch("http://cookit-server-dev2.us-east-1.elasticbeanstalk.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if ("valid" in res && res.valid) {
                    localStorage.setItem("cookit_user", res.token);
                    console.log(res)
                    history.push("/");
                } else {
                    invalidDialog.current.showModal();
                }
            })
    }

    return (
        <main className="container--login">
            <title>Cookit!:Login</title>
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <dialog className="dialog dialog--password" ref={invalidDialog}>
                <div>Password does not match</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <img className="logo" src={cookit_logo} alt={"Logo"} />
                    <h2>Please sign in!</h2>
                    <fieldset>
                        <label htmlFor="inputusername"> Username </label>
                        <input ref={username} type="username"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

