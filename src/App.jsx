import Header from "./components/Header.jsx";
import { useState } from "react";
import Login from "./components/Login.jsx";
import Homepage from "./components/Homepage.jsx";

function App() {
    const [isAuth, setAuth] = useState(null);
    const [headerMessage, setHeaderMessage] = useState("Identify");

    return (
        <>
            <Header text={headerMessage} />
            {isAuth ? (
                <Homepage userdata={isAuth} />
            ) : (
                <Login setAuth={setAuth} setHeader={setHeaderMessage} />
            )}

            <footer className="footer"></footer>
        </>
    );
}

export default App;
