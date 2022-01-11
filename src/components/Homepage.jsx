import React from "react";
import CompanyLi from "./CompanyLi.jsx";
import ContactLi from "./ContactLi.jsx";
import InvoiceLi from "./InvoiceLi.jsx";
import Chart from "./Chart.jsx";

import { useNavigate } from "react-router-dom";

function Homepage({
  userdata,
  companies,
  invoices,
  contacts,
  setPage,
  setInvoiceId,
}) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };
  return (
    <main className="homepage">
      <section className="invoices card">
        <h2>
          <span
            onClick={() => {
              navigate("/invoices");
            }}
          >
            Invoices
          </span>
          <i
            className="fas fa-plus-square plusButton"
            id="invoiceAdd"
            onClick={handleAdd}
          ></i>
        </h2>
        <ul>
          {invoices.slice(0, 5).map((entry) => {
            return (
              <InvoiceLi
                invoice={entry}
                key={entry.id}
                companies={companies}
                setPage={setPage}
                setInvoiceId={setInvoiceId}
              />
            );
          })}
        </ul>
      </section>
      <section className="contacts card">
        <h2>
          <span
            onClick={() => {
              navigate("/contacts");
            }}
          >
            Contacts
          </span>
          <i
            className="fas fa-plus-square plusButton"
            id="contactAdd"
            onClick={handleAdd}
          ></i>
        </h2>
        <ul>
          {contacts.slice(0, 5).map((entry) => {
            return (
              <ContactLi contact={entry} key={entry.id} companies={companies} />
            );
          })}
        </ul>
      </section>
      <section className="companies card">
        <h2>
          <span
            onClick={() => {
              navigate("/companies");
            }}
          >
            Companies
          </span>
          <i
            className="fas fa-plus-square plusButton"
            id="companyAdd"
            onClick={handleAdd}
          ></i>
        </h2>
        <ul>
          {companies.slice(0, 5).map((entry) => {
            return <CompanyLi company={entry} key={entry.id} />;
          })}
        </ul>
      </section>
      <section className="chart card">
        <h2>Payement Status</h2>
        <div style={{ position: "relative" }}>
          <Chart invoices={invoices} />
        </div>
      </section>
    </main>
  );
}

export default Homepage;
