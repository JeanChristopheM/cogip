import Header from "./components/Header.jsx";
import { useState, useEffect, useRef } from "react";
import Login from "./components/Login.jsx";
import Homepage from "./components/Homepage.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Footer from "./components/Footer.jsx";
import Companies from "./components/Companies.jsx";
import Contacts from "./components/Contacts.jsx";
import FourOfour from "./components/FourOfour.jsx";
import Invoices from "./components/Invoices.jsx";

function App() {
    const [isAuth, setAuth] = useState(null);
    const [page, setPage] = useState("Login");
    const [displayMenu, setDisplayMenu] = useState(false);
    const [companies, setCompanies] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [contacts, setContacts] = useState([]);

    /* If cookie, set the authentification to cache and redirect to homepage */
    useEffect(() => {
        if (localStorage.getItem("cogipAuth")) {
            setAuth(JSON.parse(localStorage.getItem("cogipAuth")));
            setPage(`HOMEPAGE`);
        }
    }, []);

    const getCompanies = async () => {
        let response = await fetch("/companies.json");
        let data = await response.json();
        setCompanies(data);
    };
    const getInvoices = async () => {
        let response = await fetch("/invoices.json");
        let data = await response.json();
        setInvoices(data);
    };
    const getContacts = async () => {
        let response = await fetch("/contacts.json");
        let data = await response.json();
        setContacts(data);
    };
    const getData = () => {
        getCompanies();
        getInvoices();
        getContacts();
    };
    /* Loading data */
    useEffect(() => {
        getData();
    }, []);

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
                    />
                );
            case "INVOICES":
                return <Invoices />;
            case "CONTACTS":
                return <Contacts />;
            case "COMPANIES":
                return <Companies data={companies} />;
            default:
                return <FourOfour />;
        }
    };

    return (
        <>
            <Header page={page} openMenu={openMenu} />
            {isAuth ? (
                pageRouter()
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
