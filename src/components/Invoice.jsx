import { useState } from "react";
import { useParams } from "react-router-dom";
import InvoiceControls from "./InvoiceControls.jsx";
import CompanySelector from "./CompanySelector.jsx";
import ContactSelector from "./ContactSelector.jsx";

function Invoice({ invoices, companies, contacts }) {
  let params = useParams();
  const invoice = invoices.find((el) => el.id == params.invoiceId);
  const company = companies.find((el) => el.id == invoice.company);
  const contact = contacts.find((el) => el.id == invoice.contact);
  let year = invoice.received.slice(0, 4);
  let month = invoice.received.slice(5, 7);
  let day = invoice.received.slice(8, 10);

  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(company);
  const [selectedContact, setSelectedContact] = useState(contact);

  const handleContactChange = (value) => {
    setSelectedContact(value);
  };
  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
  };

  return (
    <main>
      <div className="card">
        <h2>Details about invoice {invoice.reference}</h2>
        <div className="invoiceGrid">
          <span>Amount : </span>
          <span
            id="invoiceAmout"
            style={
              invoice.paid === "true" ? { color: "green" } : { color: "red" }
            }
          >
            {invoice.amount} €
          </span>
          <span>Company : </span>
          {isModifying ? (
            <CompanySelector
              companies={companies}
              handleCompanyChange={handleCompanyChange}
              currentCompany={company}
            />
          ) : (
            <span id="invoiceCompany">{company.name}</span>
          )}
          <span>Contact : </span>
          {isModifying ? (
            <ContactSelector
              contacts={contacts}
              currentContact={contact}
              currentCompany={company}
              selectedCompany={selectedCompany}
              handleContactChange={handleContactChange}
            />
          ) : (
            <span id="invoiceContact">{`${contact.firstname} ${contact.lastname}`}</span>
          )}
          <span>Date : </span>
          <span id="invoiceReceived">{`${day}-${month}-${year}`}</span>
        </div>
        <InvoiceControls
          invoice={invoice.id}
          isModifying={isModifying}
          setIsModifying={setIsModifying}
          isDeleting={isDeleting}
          setIsDeleting={setIsDeleting}
          originalCompany={company}
          setSelectedCompany={setSelectedCompany}
          originalContact={contact}
          setSelectedContact={setSelectedContact}
        />
      </div>
    </main>
  );
}

export default Invoice;
