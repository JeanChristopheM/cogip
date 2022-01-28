/* Functions */
import React, { useState, useEffect, useLayoutEffect, Suspense } from "react";
import handleRequests from "./logic/handleRequests";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { switchTheme } from "./logic/theme";
/* Components */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/reusables/ScrollToTop.jsx";
import MobileMenu from "./components/reusables/MobileMenu.jsx";
/* Page Contents */

const Login = React.lazy(() => import("./components/Login.jsx"));
const Homepage = React.lazy(() =>
  import("./components/dashboard/Homepage.jsx")
);
const Companies = React.lazy(() =>
  import("./components/companies/Companies.jsx")
);
const Company = React.lazy(() => import("./components/companies/Company.jsx"));
const Contacts = React.lazy(() => import("./components/contacts/Contacts.jsx"));
const Contact = React.lazy(() => import("./components/contacts/Contact.jsx"));
const Invoices = React.lazy(() => import("./components/invoices/Invoices.jsx"));
const Invoice = React.lazy(() => import("./components/invoices/Invoice.jsx"));
const FourOfour = React.lazy(() => import("./components/FourOfour.jsx"));
const Reports = React.lazy(() => import("./components/reports/Reports.jsx"));
const Settings = React.lazy(() => import("./components/settings/Settings.jsx"));

/* Forms for adding data */
const ContactAdd = React.lazy(() =>
  import("./components/contacts/ContactAdd.jsx")
);
const CompanyAdd = React.lazy(() =>
  import("./components/companies/CompanyAdd.jsx")
);
const InvoiceAdd = React.lazy(() =>
  import("./components/invoices/InvoiceAdd.jsx")
);

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
      "https://csharpproject.somee.com/api/Company",
      "https://csharpproject.somee.com/api/Invoice",
      "https://csharpproject.somee.com/api/Contact",
    ];
    const fn = [setCompanies, setInvoices, setContacts];
    for (let x = 0; x < 3; x++) {
      const { status, message, dataPackage } = await handleRequests(
        "GET",
        srcs[x],
        isAuth.jwt
      );
      console.log(dataPackage);
      if (status === 200) {
        fn[x](dataPackage);
      } else {
        alert("There was an error getting the data");
      }
    }
    /* setCompanies([
      {
        id: "1",
        name: "becode",
        vat: "123",
        status: "Client",
        added: "2020-02-03T00:00:00",
        contact: "1",
      },
    ]);
    setContacts([
      {
        id: "1",
        firstname: "jc",
        lastname: "m",
        email: "jc@jc.com",
        phonenumber: "123",
        added: "2020-02-03T00:00:00",
        contactcompany: "1",
      },
    ]);
    setInvoices([
      {
        id: "1",
        reference: "123",
        amount: 123,
        company: "1",
        contact: "1",
        received: "2022-02-03T00:00:00",
        paid: true,
      },
      {
        id: "2",
        reference: "123",
        amount: 123,
        company: "1",
        contact: "1",
        received: "2022-03-03T00:00:00",
        paid: true,
      },
      {
        id: "3",
        reference: "123",
        amount: 123,
        company: "1",
        contact: "1",
        received: "2022-04-03T00:00:00",
        paid: true,
      },
      {
        id: "4",
        reference: "123",
        amount: 123,
        company: "1",
        contact: "1",
        received: "2022-04-03T00:00:00",
        paid: true,
      },
    ]); */
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
                    element={suspense(<Companies companies={companies} />)}
                  />
                  <Route
                    path="/company/:companyId"
                    element={suspense(
                      <Company
                        companies={companies}
                        setIsLoaded={setIsLoaded}
                        getAllData={loadData}
                        contacts={contacts}
                        isAuth={isAuth}
                      />
                    )}
                  />
                  <Route
                    path="/invoices"
                    element={suspense(
                      <Invoices
                        invoices={invoices}
                        contacts={contacts}
                        companies={companies}
                      />
                    )}
                  />
                  <Route
                    path="/invoice/:invoiceId"
                    element={suspense(
                      <Invoice
                        invoices={invoices}
                        companies={companies}
                        contacts={contacts}
                        setIsLoaded={setIsLoaded}
                        isAuth={isAuth}
                      />
                    )}
                  />
                  <Route
                    path="/contacts"
                    element={suspense(
                      <Contacts contacts={contacts} companies={companies} />
                    )}
                  />
                  <Route
                    path="/contact/:contactId"
                    element={suspense(
                      <Contact
                        contacts={contacts}
                        companies={companies}
                        setIsLoaded={setIsLoaded}
                        isAuth={isAuth}
                      />
                    )}
                  />
                  <Route
                    path="/contactAdd"
                    element={suspense(
                      <ContactAdd
                        companies={companies}
                        setIsLoaded={setIsLoaded}
                        isAuth={isAuth}
                      />
                    )}
                  />
                  <Route
                    path="/invoiceAdd"
                    element={suspense(
                      <InvoiceAdd
                        companies={companies}
                        contacts={contacts}
                        setIsLoaded={setIsLoaded}
                        isAuth={isAuth}
                      />
                    )}
                  />
                  <Route
                    path="/companyAdd"
                    element={suspense(
                      <CompanyAdd setIsLoaded={setIsLoaded} isAuth={isAuth} />
                    )}
                  />
                  <Route
                    path="/reports"
                    element={suspense(
                      <Reports invoices={invoices} companies={companies} />
                    )}
                  />
                  <Route
                    path="/settings"
                    element={suspense(<Settings isAuth={isAuth} />)}
                  />
                  <Route path="*" element={suspense(<FourOfour />)} />
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
