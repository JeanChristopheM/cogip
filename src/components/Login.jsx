import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import dbUserCheck from "../authTemp.js";

function Login({ setAuth, isAuth }) {
  const [isFetching, setIsFetching] = useState(false);
  const logo = new URL("../media/img/logo.png", import.meta.url);
  const usernameInput = useRef(null);
  const pwdInput = useRef(null);
  const rememberInput = useRef(null);
  const navigate = useNavigate();
  console.log("login page mounted");
  const onAuthClick = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const username = usernameInput.current.value;
    const pwd = pwdInput.current.value;
    const data = { userName: username, password: pwd };

    const response = await dbUserCheck(data);
    setIsFetching(false);
    if (response[0] !== 200) {
      alert(response[1]);
      exit;
    } else {
      if (rememberInput.current.checked) {
        localStorage.setItem("cogipAuth", response[1]);
      }
      sessionStorage.setItem("cogipAuth", response[1]);
      setAuth(response[1]);
      navigate("/home");
    }
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
      {isFetching ? (
        <div className="fetching dark">
          <div className="lds-dual-ring"></div>
        </div>
      ) : null}
    </main>
  );
}

export default Login;
