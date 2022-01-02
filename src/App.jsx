import Header from "./components/Header.jsx";
import { useRef, useState } from "react";

function App() {
    const logo = new URL("./media/img/logo.png", import.meta.url);
    const usernameInput = useRef(null);
    const pwdInput = useRef(null);
    const [isAuth, setAuth] = useState("coucou");

    const onAuthClick = async () => {
        const username = usernameInput.current.value;
        const pwd = pwdInput.current.value;
        console.log(await checkAuth(username, pwd));
    };
    const checkAuth = async (username, pwd) => {
        const src = "http://127.0.0.1:3333";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, pwd }),
        };
        const result = await fetch(src, requestOptions);
        return await result.json();
    };

    return (
        <>
            <Header />
            <main className="main">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <div className="loginForm">
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
                    <button
                        type="button"
                        id="auth-button"
                        onClick={onAuthClick}
                    >
                        Confirm
                    </button>
                    <p style={{ flexBasis: "100%" }}>{isAuth}</p>
                </div>
            </main>

            <footer className="footer"></footer>
        </>
    );
}

export default App;
