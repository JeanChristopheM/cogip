import React from "react";

function Header({ page, openMenu }) {
    return (
        <header className="header">
            {page === "Login" ? (
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
            <h1>{page}</h1>
        </header>
    );
}

export default Header;
