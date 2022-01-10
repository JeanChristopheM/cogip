/* Functions */
import { useState, useEffect, useLayoutEffect } from "react";
import { getData } from "./logic/getData";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
/* Components */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
/* Page Contents */
import PrivateRoute from "./components/PrivateRoute.jsx";
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
  const [isAuth, setAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [contacts, setContacts] = useState([]);

  /* LINKS TO DATA */
  const companiesSrc = [
    "/companies.json",
    "https://csharpproject.somee.com/api/company",
  ];
  const contactsSrc = [
    "/contacts.json",
    "https://csharpproject.somee.com/api/contact",
  ];
  const invoicesSrc = [
    "/invoices.json",
    "https://csharpproject.somee.com/api/invoice",
  ];
  const local = 0;
  const remote = 1;
  /* Loading data function */
  const loadData = async () => {
    setCompanies(await getData(companiesSrc[remote]));
    setInvoices(await getData(invoicesSrc[remote]));
    setContacts(await getData(contactsSrc[remote]));
  };
  /* If cookie, set the authentification to cache and redirect to homepage */
  useEffect(() => {
    if (sessionStorage.getItem("cogipAuth")) {
      setAuth(JSON.parse(sessionStorage.getItem("cogipAuth")));
    } else if (localStorage.getItem("cogipAuth")) {
      setAuth(JSON.parse(localStorage.getItem("cogipAuth")));
    }
  }, []);
  /* If we logged in -> Load the data */
  useLayoutEffect(() => {
    if (isAuth && !isLoaded) {
      loadData();
      navigate("/home");
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
  };
  /* Possible Routes */
  const possibleRoutes = [
    "login",
    "home",
    "companies",
    "company",
    "contacts",
    "contact",
    "invoices",
    "invoice",
    "contactAdd",
    "invoiceAdd",
    "companyAdd",
  ];
  return (
    <>
      <Header openMenu={openMenu} possibleRoutes={possibleRoutes} />
      <Routes>
        <Route
          path="/login"
          element={<Login setAuth={setAuth} isAuth={isAuth} />}
        />
        <Route
          path="/home"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={
                <Homepage
                  userdata={isAuth}
                  companies={companies}
                  contacts={contacts}
                  invoices={invoices}
                />
              }
            />
          }
        />
        <Route
          path="/companies"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={<Companies data={companies} />}
            />
          }
        />
        <Route
          path="/company/:companyId"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={<Company companies={companies} />}
            />
          }
        />
        <Route
          path="/invoices"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={<Invoices data={invoices} companies={companies} />}
            />
          }
        />
        <Route
          path="/invoice/:invoiceId"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={
                <Invoice
                  invoices={invoices}
                  companies={companies}
                  contacts={contacts}
                />
              }
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={<Contacts data={contacts} companies={companies} />}
            />
          }
        />
        <Route
          path="/contact/:contactId"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={<Contact contacts={contacts} companies={companies} />}
            />
          }
        />
        <Route
          path="/contactAdd"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={<ContactAdd companies={companies} />}
            />
          }
        />
        <Route
          path="/invoiceAdd"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={<InvoiceAdd companies={companies} contacts={contacts} />}
            />
          }
        />
        <Route
          path="/companyAdd"
          element={<PrivateRoute isAuth={isAuth} element={<CompanyAdd />} />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute
              isAuth={isAuth}
              element={
                <Homepage
                  userdata={isAuth}
                  companies={companies}
                  contacts={contacts}
                  invoices={invoices}
                />
              }
            />
          }
        />
        <Route path="*" element={<FourOfour />} />
      </Routes>
      {displayMenu && <MobileMenu onLogout={logout} />}
      <Footer />
    </>
  );
}

export default App;
