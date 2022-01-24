import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import handleRequests from "../logic/handleRequests.js";
import Logo from "./reusables/Logo.jsx";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function Login({ setAuth, isAuth, location }) {
  const [isFetching, setIsFetching] = useState(false);
  const usernameInput = useRef(null);
  const pwdInput = useRef(null);
  const rememberInput = useRef(null);
  const navigate = useNavigate();
  const [isShowing, setIsShowing] = useState("");
  useEffect(() => {
    setIsShowing("appear");
  }, []);
  const onAuthClick = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const exitIfEmpty = (input) => {
      if (!input.value) {
        setIsFetching(false);
        input.classList.add("blinkInputEmpty");
        setTimeout(() => {
          input.classList.remove("blinkInputEmpty");
        }, 500);
        return true;
      }
    };
    if (exitIfEmpty(usernameInput.current) || exitIfEmpty(pwdInput.current))
      return;
    const username = usernameInput.current.value;
    const pwd = pwdInput.current.value;
    const data = { userName: username, password: pwd };

    const { status, message, dataPackage } = await handleRequests(
      "POST",
      "https://csharpproject.somee.com/api/Auth/login",
      null,
      data
    );
    setIsFetching(false);
    if (status !== 200) {
      setTimeout(() => {
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }, 250);
    } else {
      if (rememberInput.current.checked) {
        localStorage.setItem("cogipAuth", JSON.stringify(dataPackage));
      }
      sessionStorage.setItem("cogipAuth", JSON.stringify(dataPackage));
      setIsShowing("begone");
      setTimeout(() => {
        setAuth(dataPackage);
        navigate(location.pathname);
      }, 1000);
    }
  };
  return (
    <main className={`login ${isShowing}`}>
      <Logo handleClick={null} handleStyle={{ height: "10rem" }} />
      <form className="loginForm card">
        <h2>Login</h2>
        <input
          ref={usernameInput}
          type="text"
          placeholder="Username :"
          className="loginInput"
          autoFocus
        />
        <input
          ref={pwdInput}
          type="password"
          placeholder="Password :"
          className="loginInput"
        />
        <label htmlFor="rememberCheck" className="rememberMe">
          <input
            name="rememberCheck"
            id="rememberCheck"
            type="checkbox"
            ref={rememberInput}
          />
          Remember me
        </label>
        <button id="auth-button" onClick={onAuthClick}>
          Confirm
        </button>
      </form>
      {isFetching ? (
        <div className="fetching dark">
          <div className="lds-dual-ring"></div>
        </div>
      ) : null}
      <ToastContainer />
    </main>
  );
}

export default Login;
