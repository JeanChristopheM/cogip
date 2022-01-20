/* Functions */
import { useState, useEffect, useLayoutEffect } from "react";
import handleRequests from "./logic/handleRequests";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
/* Components */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
/* Page Contents */
import Login from "./components/Login.jsx";
import Homepage from "./components/Homepage.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Companies from "./components/Companies.jsx";
import Company from "./components/Company.jsx";
import Contacts from "./components/Contacts.jsx";
import Contact from "./components/Contact.jsx";
import Invoices from "./components/Invoices.jsx";
import Invoice from "./components/Invoice.jsx";
import FourOfour from "./components/FourOfour.jsx";

/* Forms for adding data */
import ContactAdd from "./components/ContactAdd.jsx";
import CompanyAdd from "./components/CompanyAdd.jsx";
import InvoiceAdd from "./components/InvoiceAdd.jsx";

function App() {
  const navigate = useNavigate();
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [contacts, setContacts] = useState([]);

  const location = useLocation();

  /* Loading data function */
  const loadData = async () => {
    const srcs = [
      "https://csharpproject.somee.com/api/company",
      "https://csharpproject.somee.com/api/invoice",
      "https://csharpproject.somee.com/api/contact",
    ];
    const fn = [setCompanies, setInvoices, setContacts];
    for (let x = 0; x < 3; x++) {
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
    }
  };
  /* If cookie, set the authentification to cache and redirect to homepage */
  useLayoutEffect(() => {
    if (sessionStorage.getItem("cogipAuth")) {
      setAuth(JSON.parse(sessionStorage.getItem("cogipAuth")));
    } else if (localStorage.getItem("cogipAuth")) {
      setAuth(JSON.parse(localStorage.getItem("cogipAuth")));
    }
    setCheckedAuth(true);
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

  /* Mobile Menu related functions */
  const closeMenu = (e) => {
    if (!e.target.classList.contains("mobileMenu__list")) {
      setDisplayMenu(false);
      document.body.style.overflow = "unset";
    }
  };
  const openMenu = (e) => {
    setDisplayMenu(true);
    e.stopPropagation();
    document.addEventListener("click", closeMenu);
    document.body.style.overflow = "hidden";
  };

  /* Logout function */
  const logout = () => {
    localStorage.removeItem("cogipAuth");
    sessionStorage.removeItem("cogipAuth");
    setAuth(null);
    setDisplayMenu(false);
    navigate("/");
  };

  return (
    <>
      <Header openMenu={openMenu} onLogout={logout} isAuth={isAuth} />
      <ScrollToTop />
      {checkedAuth ? (
        <>
          {isAuth ? (
            <>
              {isLoaded ? (
                <Routes>
                  <Route
                    path=""
                    element={
                      <Homepage
                        isAuth={isAuth}
                        companies={companies}
                        contacts={contacts}
                        invoices={invoices}
                      />
                    }
                  />
                  <Route
                    path="/companies"
                    element={<Companies companies={companies} />}
                  />
                  <Route
                    path="/company/:companyId"
                    element={
                      <Company
                        companies={companies}
                        setIsLoaded={setIsLoaded}
                        getAllData={loadData}
                        contacts={contacts}
                        isAuth={isAuth}
                      />
                    }
                  />
                  <Route
                    path="/invoices"
                    element={
                      <Invoices
                        invoices={invoices}
                        contacts={contacts}
                        companies={companies}
                      />
                    }
                  />
                  <Route
                    path="/invoice/:invoiceId"
                    element={
                      <Invoice
                        invoices={invoices}
                        companies={companies}
                        contacts={contacts}
                        setIsLoaded={setIsLoaded}
                        isAuth={isAuth}
                      />
                    }
                  />
                  <Route
                    path="/contacts"
                    element={
                      <Contacts contacts={contacts} companies={companies} />
                    }
                  />
                  <Route
                    path="/contact/:contactId"
                    element={
                      <Contact
                        contacts={contacts}
                        companies={companies}
                        setIsLoaded={setIsLoaded}
                        isAuth={isAuth}
                      />
                    }
                  />
                  <Route
                    path="/contactAdd"
                    element={
                      <ContactAdd
                        companies={companies}
                        setIsLoaded={setIsLoaded}
                        isAuth={isAuth}
                      />
                    }
                  />
                  <Route
                    path="/invoiceAdd"
                    element={
                      <InvoiceAdd
                        companies={companies}
                        contacts={contacts}
                        setIsLoaded={setIsLoaded}
                        isAuth={isAuth}
                      />
                    }
                  />
                  <Route
                    path="/companyAdd"
                    element={
                      <CompanyAdd setIsLoaded={setIsLoaded} isAuth={isAuth} />
                    }
                  />
                  <Route path="*" element={<FourOfour />} />
                </Routes>
              ) : (
                <main>
                  <div className="fetching dark">
                    <div className="lds-dual-ring"></div>
                  </div>
                </main>
              )}
            </>
          ) : (
            <Login setAuth={setAuth} location={location} />
          )}
        </>
      ) : (
        <main>"Verifying Authentification"</main>
      )}
      {displayMenu && <MobileMenu onLogout={logout} />}
      <Footer />
    </>
  );
}

export default App;
