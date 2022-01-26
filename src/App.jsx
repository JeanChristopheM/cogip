/* Functions */
import React, { useState, useEffect, useLayoutEffect, Suspense } from "react";
import handleRequests from "./logic/handleRequests";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { switchTheme } from "./logic/theme";
/* Components */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/reusables/ScrollToTop.jsx";
/* Page Contents */
//import Login from "./components/Login.jsx";
const Login = React.lazy(() => import("./components/Login.jsx"));
//import Homepage from "./components/dashboard/Homepage.jsx";
const Homepage = React.lazy(() =>
  import("./components/dashboard/Homepage.jsx")
);
//import MobileMenu from "./components/reusables/MobileMenu.jsx";
const MobileMenu = React.lazy(() =>
  import("./components/reusables/MobileMenu.jsx")
);
import Companies from "./components/companies/Companies.jsx";
import Company from "./components/companies/Company.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Contact from "./components/contacts/Contact.jsx";
import Invoices from "./components/invoices/Invoices.jsx";
import Invoice from "./components/invoices/Invoice.jsx";
import FourOfour from "./components/FourOfour.jsx";
import Reports from "./components/reports/Reports.jsx";
import Settings from "./components/settings/Settings.jsx";

/* Forms for adding data */
import ContactAdd from "./components/contacts/ContactAdd.jsx";
import CompanyAdd from "./components/companies/CompanyAdd.jsx";
import InvoiceAdd from "./components/invoices/InvoiceAdd.jsx";

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

  const location = useLocation();

  const suspense = (element) => {
    return <Suspense fallback={<main>Loading...</main>}>{element}</Suspense>;
  };
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
  /* Initial Effects */
  useLayoutEffect(() => {
    /* If cookie, set the authentification to cache and redirect to homepage */
    if (sessionStorage.getItem("cogipAuth")) {
      setAuth(JSON.parse(sessionStorage.getItem("cogipAuth")));
    } else if (localStorage.getItem("cogipAuth")) {
      setAuth(JSON.parse(localStorage.getItem("cogipAuth")));
    }
    /* Checking if theme stored in local storage and applying if needed */
    if (localStorage.getItem("cogipTheme")) {
      switchTheme(JSON.parse(localStorage.getItem("cogipTheme")));
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
      setIsMenuActive("inactive");
    }
  };
  const openMenu = (e) => {
    setIsMenuActive("active");
    e.stopPropagation();
    document.addEventListener("click", closeMenu);
  };

  /* Logout function */
  const logout = () => {
    localStorage.removeItem("cogipAuth");
    sessionStorage.removeItem("cogipAuth");
    setAuth(null);
    setIsMenuActive("inactive");
    navigate("/");
  };

  // COME BACK HERE JC
  /*

  Journal financier

  Listing des factures sur la page company/:companyId

  Solde par company, par date, bilans, ...

  TODO
  FIX TABLE OF INVOICE ON LARGE SCREENS
  
  */

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
                    element={suspense(
                      <Homepage
                        isAuth={isAuth}
                        companies={companies}
                        contacts={contacts}
                        invoices={invoices}
                      />
                    )}
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
                  <Route
                    path="/reports"
                    element={
                      <Reports invoices={invoices} companies={companies} />
                    }
                  />
                  <Route
                    path="/settings"
                    element={<Settings isAuth={isAuth} />}
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
            suspense(<Login setAuth={setAuth} location={location} />)
          )}
        </>
      ) : (
        <main>"Verifying Authentification"</main>
      )}
      <MobileMenu onLogout={logout} displayStatus={isMenuActive} />
      <Footer />
    </>
  );
}

export default App;
