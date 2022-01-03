import { useRef } from "react";
import dbUserCheck from "../db.js";

function Login({ setAuth, setHeader }) {
    const logo = new URL("../media/img/logo.png", import.meta.url);
    const usernameInput = useRef(null);
    const pwdInput = useRef(null);

    const onAuthClick = async (e) => {
        e.preventDefault();
        const username = usernameInput.current.value;
        const pwd = pwdInput.current.value;
        const response = dbUserCheck(username, pwd);
        if (typeof response == "string") {
            alert(response);
            return;
        }
        setHeader(`HOMEPAGE`);
        setAuth(response);
    };
    return (
        <main className="login">
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <form className="loginForm card">
                <h2>Login</h2>
                <input
                    ref={usernameInput}
                    type="text"
                    placeholder="Username :"
                />
                <input
                    ref={pwdInput}
                    type="password"
                    placeholder="Password :"
                />
                <input type="checkbox" />
                <button id="auth-button" onClick={onAuthClick}>
                    Confirm
                </button>
            </form>
        </main>
    );
}

export default Login;
