import React from "react";
import { Routes, Route } from "react-router-dom";
import SuspenseProvider from "./components/reusables/SuspenseProvider.jsx";

/* PAGES */
const Homepage = React.lazy(() =>
  import("./components/dashboard/Homepage.jsx")
);
const Companies = React.lazy(() =>
  import("./components/companies/Companies.jsx")
);
const Contacts = React.lazy(() => import("./components/contacts/Contacts.jsx"));
const Invoices = React.lazy(() => import("./components/invoices/Invoices.jsx"));
const FourOfour = React.lazy(() => import("./components/FourOfour.jsx"));
const Reports = React.lazy(() => import("./components/reports/Reports.jsx"));
const Settings = React.lazy(() => import("./components/settings/Settings.jsx"));

/* SOLO ITEM PAGES */
const Company = React.lazy(() => import("./components/companies/Company.jsx"));
const Contact = React.lazy(() => import("./components/contacts/Contact.jsx"));
const Invoice = React.lazy(() => import("./components/invoices/Invoice.jsx"));

/* Forms for adding data */
const UserAdd = React.lazy(() => import("./components/settings/UserAdd.jsx"));
const UserEdit = React.lazy(() => import("./components/settings/UserEdit.jsx"));

const ContactAdd = React.lazy(() =>
  import("./components/contacts/ContactAdd.jsx")
);
const CompanyAdd = React.lazy(() =>
  import("./components/companies/CompanyAdd.jsx")
);
const InvoiceAdd = React.lazy(() =>
  import("./components/invoices/InvoiceAdd.jsx")
);

const Router = ({
  isAuth,
  invoices,
  companies,
  contacts,
  setIsLoaded,
  categories,
}) => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <SuspenseProvider
            element={
              <Homepage
                isAuth={isAuth}
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
          <SuspenseProvider element={<Companies companies={companies} />} />
        }
      />
      <Route
        path="/company/:companyId"
        element={
          <SuspenseProvider
            element={
              <Company
                companies={companies}
                setIsLoaded={setIsLoaded}
                contacts={contacts}
                isAuth={isAuth}
              />
            }
          />
        }
      />
      <Route
        path="/invoices"
        element={
          <SuspenseProvider
            element={
              <Invoices
                invoices={invoices}
                contacts={contacts}
                companies={companies}
              />
            }
          />
        }
      />
      <Route
        path="/invoice/:invoiceId"
        element={
          <SuspenseProvider
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
        }
      />
      <Route
        path="/contacts"
        element={
          <SuspenseProvider
            element={<Contacts contacts={contacts} companies={companies} />}
          />
        }
      />
      <Route
        path="/contact/:contactId"
        element={
          <SuspenseProvider
            element={
              <Contact
                contacts={contacts}
                companies={companies}
                setIsLoaded={setIsLoaded}
                isAuth={isAuth}
              />
            }
          />
        }
      />
      <Route
        path="/contactAdd"
        element={
          <SuspenseProvider
            element={
              <ContactAdd
                companies={companies}
                setIsLoaded={setIsLoaded}
                isAuth={isAuth}
              />
            }
          />
        }
      />
      <Route
        path="/invoiceAdd"
        element={
          <SuspenseProvider
            element={
              <InvoiceAdd
                companies={companies}
                contacts={contacts}
                setIsLoaded={setIsLoaded}
                isAuth={isAuth}
                categories={categories}
              />
            }
          />
        }
      />
      <Route
        path="/companyAdd"
        element={
          <SuspenseProvider
            element={<CompanyAdd setIsLoaded={setIsLoaded} isAuth={isAuth} />}
          />
        }
      />
      <Route
        path="/reports"
        element={
          <SuspenseProvider
            element={<Reports invoices={invoices} companies={companies} />}
          />
        }
      />
      <Route
        path="/settings"
        element={<SuspenseProvider element={<Settings isAuth={isAuth} />} />}
      />
      <Route
        path="/userAdd"
        element={<SuspenseProvider element={<UserAdd isAuth={isAuth} />} />}
      />
      <Route
        path="/userEdit/:userId"
        element={<SuspenseProvider element={<UserEdit isAuth={isAuth} />} />}
      />
      <Route path="*" element={<SuspenseProvider element={<FourOfour />} />} />
    </Routes>
  );
};

export default Router;
