/* Functions */
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getInvoices,
  getContacts,
  getCompanies,
  getCategories,
} from "./logic/getData";
import { switchTheme } from "./logic/theme";
import checkAuth from "./logic/checkAuth";
/* Components */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/reusables/ScrollToTop.jsx";
import MobileMenu from "./components/reusables/MobileMenu.jsx";
import Router from "./Router.jsx";
import SuspenseProvider from "./components/reusables/SuspenseProvider.jsx";
/* Page Contents */
const Login = React.lazy(() => import("./components/Login.jsx"));

/* Toast Style */
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  // Effects variables
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState("inactive");
  // DATA STATE HOLDERS
  const [companies, setCompanies] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [categories, setCategories] = useState([]);
  // LOCATION
  const location = useLocation();

  /* Loading data function */
  const loadData = async () => {
    const getters = [getInvoices, getCompanies, getContacts, getCategories];
    const setters = [setInvoices, setCompanies, setContacts, setCategories];
    for (let x = 0; x < getters.length; x++) {
      try {
        const { status, message, dataPackage } = await getters[x](isAuth.jwt);
        if (status === 200) {
          setters[x](dataPackage);
        } else {
          console.log(message);
        }
      } catch (e) {
        console.log(error);
      }
    }
  };

  /* Initial Effects */
  useLayoutEffect(() => {
    checkAuth(setAuth, switchTheme, setCheckedAuth);
  }, []);

  /* Observer that fetches data if we're authenticated and we have updated something */
  useLayoutEffect(() => {
    if (isAuth && !isLoaded) {
      loadData();
    }
  }, [isAuth, isLoaded]);

  /* Check if all data is loaded */
  useEffect(() => {
    if (companies.length > 0 && invoices.length > 0 && contacts.length > 0) {
      setIsLoaded(true);
    }
  }, [companies, invoices, contacts]);

  /* Logging out function */
  const logout = () => {
    localStorage.removeItem("cogipAuth");
    sessionStorage.removeItem("cogipAuth");
    setAuth(null);
    setIsMenuActive("inactive");
    navigate("/");
  };
  return (
    <>
      <Header
        onLogout={logout}
        isAuth={isAuth}
        setIsMenuActive={setIsMenuActive}
      />
      <ScrollToTop />
      {checkedAuth ? (
        <>
          {isAuth ? (
            <>
              {isLoaded ? (
                <Router
                  isAuth={isAuth}
                  invoices={invoices}
                  companies={companies}
                  contacts={contacts}
                  setIsLoaded={setIsLoaded}
                  categories={categories}
                />
              ) : (
                <main>
                  <div className="fetching dark">
                    <div className="lds-dual-ring"></div>
                  </div>
                </main>
              )}
            </>
          ) : (
            <SuspenseProvider
              element={<Login setAuth={setAuth} location={location} />}
            />
          )}
        </>
      ) : (
        <main>
          <div className="fetching dark">
            <div className="lds-dual-ring"></div>
          </div>
        </main>
      )}
      <MobileMenu
        onLogout={logout}
        displayStatus={isMenuActive}
        handleToggle={setIsMenuActive}
      />
      <Footer />
    </>
  );
}

export default App;
