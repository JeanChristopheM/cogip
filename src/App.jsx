/* Functions */
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import handleRequests from "./logic/handleRequests";
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
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState("inactive");
  const [companies, setCompanies] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [categories, setCategories] = useState([]);

  const location = useLocation();

  const showNewFetch = (data) => {
    console.log(data);
  };
  /* Loading data function */
  const loadData = async () => {
    const srcs = [
      "https://csharpproject.somee.com/api/Company",
      "https://csharpproject.somee.com/api/Invoice",
      "https://csharpproject.somee.com/api/Contact",
      "https://csharpproject.somee.com/api/InvoiceCategory",
      "https://csharpproject.somee.com/api/Invoice?last=5",
    ];
    const fn = [
      setCompanies,
      setInvoices,
      setContacts,
      setCategories,
      showNewFetch,
    ];
    for (let x = 0; x < fn.length; x++) {
      try {
        const { status, message, dataPackage } = await handleRequests(
          "GET",
          srcs[x],
          isAuth.jwt
        );
        if (status === 200) {
          fn[x](dataPackage);
        } else {
          alert("There was an error getting the data");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  /* Initial Effects */
  useLayoutEffect(() => {
    /* If cookie, set the authentification to cache and redirect to homepage */
    checkAuth(setAuth, switchTheme, setCheckedAuth);
  }, []);
  /* If we logged in -> Load the data */
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
