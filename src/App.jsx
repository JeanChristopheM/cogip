/* Functions */
import { useState, useEffect } from "react";
import { getCompanies, getInvoices, getContacts } from "./logic/getData";
/* Components */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
/* Page Contents */
import Login from "./components/Login.jsx";
import Homepage from "./components/Homepage.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Companies from "./components/Companies.jsx";
import Contacts from "./components/Contacts.jsx";
import Invoices from "./components/Invoices.jsx";
import Invoice from "./components/Invoice.jsx";
import FourOfour from "./components/FourOfour.jsx";

function App() {
    const [isAuth, setAuth] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState("Login");
    const [displayMenu, setDisplayMenu] = useState(false);
    const [companies, setCompanies] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [invoiceId, setInvoiceId] = useState(null);
    const [contacts, setContacts] = useState([]);

    /* Loading data function */
    const loadData = async () => {
        setCompanies(await getCompanies());
        setInvoices(await getInvoices());
        setContacts(await getContacts());
    };
    /* If cookie, set the authentification to cache and redirect to homepage */
    useEffect(() => {
        if (localStorage.getItem("cogipAuth")) {
            setAuth(JSON.parse(localStorage.getItem("cogipAuth")));
            setPage(`HOMEPAGE`);
        }
    }, []);
    useEffect(() => {
        if (isAuth) {
            loadData();
        }
    }, [isAuth]);

    /* Check if all data is loaded */
    useEffect(() => {
        if (
            companies.length > 0 &&
            invoices.length > 0 &&
            contacts.length > 0
        ) {
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
        setPage("Login");
        setAuth(null);
        setDisplayMenu(false);
    };

    const pageRouter = () => {
        switch (page) {
            case "HOMEPAGE":
                return (
                    <Homepage
                        userdata={isAuth}
                        companies={companies}
                        contacts={contacts}
                        invoices={invoices}
                        setPage={setPage}
                        setInvoiceId={setInvoiceId}
                    />
                );
            case "INVOICES":
                return (
                    <Invoices
                        data={invoices}
                        companies={companies}
                        setPage={setPage}
                        setInvoiceId={setInvoiceId}
                    />
                );
            case "INVOICE":
                return (
                    <Invoice
                        invoices={invoices}
                        invoiceId={invoiceId}
                        setPage={setPage}
                    />
                );
            case "CONTACTS":
                return (
                    <Contacts
                        data={contacts}
                        companies={companies}
                        setPage={setPage}
                    />
                );
            case "COMPANIES":
                return <Companies data={companies} setPage={setPage} />;
            default:
                return <FourOfour />;
        }
    };

    return (
        <>
            <Header page={page} openMenu={openMenu} />
            {isAuth ? (
                isLoaded ? (
                    pageRouter()
                ) : (
                    <main>
                        <h2 style={{ textAlign: "center" }}>
                            Welcome {isAuth.username}.
                        </h2>
                        <p style={{ textAlign: "center" }}>
                            Please wait while we are loading your environment
                        </p>
                    </main>
                )
            ) : (
                <Login setAuth={setAuth} setPage={setPage} />
            )}
            {displayMenu && (
                <MobileMenu onLogout={logout} changePage={setPage} />
            )}
            <Footer />
        </>
    );
}

export default App;
