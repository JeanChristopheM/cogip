import React from "react";

import Chart from "../reusables/Chart.jsx";
import LastFiveInvoices from "./LastFiveInvoices.jsx";
import LastFiveContacts from "./LastFiveContacts.jsx";
import LastFiveCompanies from "./LastFiveCompanies.jsx";
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
      <LastFiveInvoices
        handleAdd={handleAdd}
        navigate={navigate}
        invoices={invoices}
        companies={companies}
        setPage={setPage}
        setInvoiceId={setInvoiceId}
      />
      <LastFiveContacts
        handleAdd={handleAdd}
        navigate={navigate}
        contacts={contacts}
        companies={companies}
      />
      <LastFiveCompanies
        handleAdd={handleAdd}
        navigate={navigate}
        companies={companies}
      />

      <section className="chart card">
        <h2>Payement Status</h2>
        <div style={{ position: "relative" }} id="canvasContainer">
          {invoices.length > 0 ? (
            <Chart invoices={invoices} />
          ) : (
            <div className="spinner-centerer">
              <div className="lds-dual-ring"></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Homepage;
