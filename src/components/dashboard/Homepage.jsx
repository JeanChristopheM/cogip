import React from "react";
import CompanyLi from "../reusables/CompanyLi.jsx";
import ContactLi from "../reusables/ContactLi.jsx";
import InvoiceLi from "../reusables/InvoiceLi.jsx";
import Chart from "../reusables/Chart.jsx";

import { useNavigate } from "react-router-dom";

function Homepage({ companies, invoices, contacts, setPage, setInvoiceId }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };

  /* Sorting data to get 5 latest addition */
  invoices.sort((a, b) => {
    return new Date(b.received) - new Date(a.received);
  });
  contacts.sort((a, b) => {
    return new Date(b.added) - new Date(a.added);
  });
  companies.sort((a, b) => {
    return new Date(b.added) - new Date(a.added);
  });

  return (
    <main className="homepage">
      <section className="invoices card">
        <h2>
          <span
            onClick={() => {
              navigate("/invoices");
            }}
            style={{ cursor: "pointer" }}
          >
            Last 5 invoices
          </span>
          <button
            type="button"
            id="invoiceAdd"
            onClick={handleAdd}
            style={{ padding: "0 .5rem" }}
          >
            +
          </button>
        </h2>
        <ul>
          {invoices.length > 0 ? (
            invoices.slice(0, 5).map((entry) => {
              return (
                <InvoiceLi
                  invoice={entry}
                  key={entry.id}
                  companies={companies}
                  setPage={setPage}
                  setInvoiceId={setInvoiceId}
                />
              );
            })
          ) : (
            <li>
              <div className="spinner-centerer">
                <div className="lds-dual-ring"></div>
              </div>
            </li>
          )}
        </ul>
      </section>
      <section className="contacts card">
        <h2>
          <span
            onClick={() => {
              navigate("/contacts");
            }}
            style={{ cursor: "pointer" }}
          >
            Last 5 contacts
          </span>
          <button
            type="button"
            id="contactAdd"
            onClick={handleAdd}
            style={{ padding: "0 .5rem" }}
          >
            +
          </button>
        </h2>
        <ul>
          {contacts.length > 0 ? (
            contacts.slice(0, 5).map((entry) => {
              return (
                <ContactLi
                  contact={entry}
                  key={entry.id}
                  companies={companies}
                />
              );
            })
          ) : (
            <li>
              <div className="spinner-centerer">
                <div className="lds-dual-ring"></div>
              </div>
            </li>
          )}
        </ul>
      </section>
      <section className="companies card">
        <h2>
          <span
            onClick={() => {
              navigate("/companies");
            }}
            style={{ cursor: "pointer" }}
          >
            Last 5 companies
          </span>
          <button
            type="button"
            id="companyAdd"
            onClick={handleAdd}
            style={{ padding: "0 .5rem" }}
          >
            +
          </button>
        </h2>
        <ul>
          {companies.length > 0 ? (
            companies.slice(0, 5).map((entry) => {
              return <CompanyLi company={entry} key={entry.id} />;
            })
          ) : (
            <li>
              <div className="spinner-centerer">
                <div className="lds-dual-ring"></div>
              </div>
            </li>
          )}
        </ul>
      </section>
      <section className="chart card">
        <h2>Payement Status</h2>
        <div style={{ position: "relative" }} id="canvasContainer">
          {invoices.length > 0 ? (
            <Chart invoices={invoices} />
          ) : (
            <li>
              <div className="spinner-centerer">
                <div className="lds-dual-ring"></div>
              </div>
            </li>
          )}
        </div>
      </section>
    </main>
  );
}

export default Homepage;
