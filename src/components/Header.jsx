import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "./reusables/Logo.jsx";

const Header = ({ openMenu, onLogout, isAuth }) => {
  const location = useLocation();
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

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
            <Link to="" className={selected === "/" ? "active" : null}>
              DASHBOARD
            </Link>
            <Link
              to="/invoices"
              className={
                selected === "/invoices" || selected === "/invoiceAdd"
                  ? "active"
                  : null
              }
            >
              INVOICES
            </Link>
            <Link
              to="/contacts"
              className={
                selected === "/contacts" || selected === "/contactAdd"
                  ? "active"
                  : null
              }
            >
              CONTACTS
            </Link>
            <Link
              to="/companies"
              className={
                selected === "/companies" || selected === "/companyAdd"
                  ? "active"
                  : null
              }
            >
              COMPANIES
            </Link>
            <Link
              to="/reports"
              className={selected === "/reports" ? "active" : null}
            >
              REPORTS
            </Link>
            {isAuth ? (
              <>
                <Link to="" onClick={onLogout} id="logoutLink">
                  LOGOUT
                </Link>
                <Link
                  to="/settings"
                  id="settingsIcon"
                  className={selected === "/settings" ? "active" : null}
                >
                  <i className="fas fa-cog settingsIcon"></i>
                </Link>
              </>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
