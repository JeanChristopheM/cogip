import { useState } from "react";
import CompanySelector from "./CompanySelector";
import ContactSelector from "./ContactSelector";

function InvoiceAdd({ contacts, companies }) {
  const [selectedCompany, setSelectedCompany] = useState("");

  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
  };
  const handleContactChange = (value) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form");
  };
  return (
    <main>
      <div className="card">
        <h2>Fill up the form</h2>
        <form className="invoiceForm" onSubmit={handleSubmit}>
          <ul>
            <li>
              <span>Company : </span>
              <CompanySelector
                companies={companies}
                handleCompanyChange={handleCompanyChange}
                currentCompany={{ name: "" }}
              />
            </li>
            <li>
              <span>Contact : </span>
              <ContactSelector
                contacts={contacts}
                companies={companies}
                selectedCompany={selectedCompany}
                handleContactChange={handleContactChange}
                currentContact={{ name: "" }}
              />
            </li>
            <li>
              <span>Status : </span>
              <select name="status">
                <option value="">Select a status</option>
                <option value="Supplier">Supplier</option>
                <option value="Client">Client</option>
              </select>
            </li>
          </ul>
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default InvoiceAdd;
