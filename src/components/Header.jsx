import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";

const Header = ({ openMenu, onLogout, isAuth }) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          {!isAuth ? (
            <>
              <span id="burger"></span>
            </>
          ) : (
            <>
              <i
                id="burger"
                className="fas fa-bars"
                onClick={(e) => {
                  openMenu(e);
                }}
              ></i>
            </>
          )}
          <Logo
            handleClick={() => {
              navigate("");
            }}
            handleStyle={{ cursor: "pointer", height: "3rem" }}
          />
        </div>
        <div className="header__bottom">
          <nav>
            <Link to="">HOME</Link>
            <Link to="/invoices">INVOICES</Link>
            <Link to="/contacts">CONTACTS</Link>
            <Link to="/companies">COMPANIES</Link>
            {isAuth ? (
              <Link to="" onClick={onLogout} id="logoutLink">
                LOGOUT
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
