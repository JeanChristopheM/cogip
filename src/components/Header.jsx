import React from "react";
import { useLocation } from "react-router-dom";

function Header({ openMenu, possibleRoutes }) {
    const url = useLocation();
    const location = url.pathname.slice(1, url.pathname.length).split("/")[0];
    const finalLocation = possibleRoutes.includes(location) ? location : "404";
    return (
        <header className="header">
            {finalLocation === "login" ? (
                <span id="burger"></span>
            ) : (
                <i
                    id="burger"
                    className="fas fa-bars"
                    onClick={(e) => {
                        openMenu(e);
                    }}
                ></i>
            )}
            <h1>{finalLocation.toUpperCase()}</h1>
        </header>
    );
}

export default Header;
