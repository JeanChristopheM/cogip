import { useRef } from "react";
import dbUserCheck from "../authTemp.js";

function Login({ setAuth, setPage }) {
    const logo = new URL("../media/img/logo.png", import.meta.url);
    const usernameInput = useRef(null);
    const pwdInput = useRef(null);
    const rememberInput = useRef(null);

    const onAuthClick = async (e) => {
        e.preventDefault();

        const username = usernameInput.current.value;
        const pwd = pwdInput.current.value;

        const response = dbUserCheck(username, pwd);
        if (typeof response == "string") {
            alert(response);
            return;
        }

        if (rememberInput.current.checked) {
            localStorage.setItem("cogipAuth", JSON.stringify(response));
        }

        setPage(`HOMEPAGE`);
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
                    className="loginInput"
                />
                <input
                    ref={pwdInput}
                    type="password"
                    placeholder="Password :"
                    className="loginInput"
                />
                <div className="rememberMe">
                    <input
                        name="rememberCheck"
                        id="rememberCheck"
                        type="checkbox"
                        ref={rememberInput}
                    />
                    <label htmlFor="rememberCheck">Remember me</label>
                </div>
                <button id="auth-button" onClick={onAuthClick}>
                    Confirm
                </button>
            </form>
        </main>
    );
}

export default Login;
