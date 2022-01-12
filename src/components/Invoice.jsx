import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InvoiceControls from "./InvoiceControls.jsx";
import CompanySelector from "./CompanySelector.jsx";
import ContactSelector from "./ContactSelector.jsx";
import putData from "../logic/putData";
import { invoiceVerify } from "../logic/formValidation.js";

function Invoice({ invoices, companies, contacts, setIsLoaded, isAuth }) {
  let params = useParams();
  const navigate = useNavigate();
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
  const referenceRef = useRef();
  const amountRef = useRef();
  const receivedRef = useRef();
  const paidRef = useRef();

  const handleModif = async () => {
    const formData = {
      reference: referenceRef.current.value,
      amount: amountRef.current.value,
      company: selectedCompany.id.toString(),
      contact: selectedContact.id.toString(),
      received: receivedRef.current.value,
      paid: paidRef.current.checked,
    };
    let check = invoiceVerify(formData);
    if (check.ok) {
      console.log(formData);
      await putData(
        `https://csharpproject.somee.com/api/invoice/${params.invoiceId}`,
        formData
      );
      setIsLoaded(false);
    } else {
      const issues = Object.keys(check);
      for (let issue of issues) {
        if (issue !== "ok") alert(check[issue]);
      }
    }
  };
  return (
    <main>
      <div className="card">
        <h2>Details about invoice {invoice.reference}</h2>
        <div className="invoiceGrid">
          <span>Reference : </span>
          {isModifying ? (
            <input
              type="text"
              name="reference"
              ref={referenceRef}
              defaultValue={invoice.reference}
              required
            />
          ) : (
            <span id="invoiceReference">{invoice.reference}</span>
          )}

          <span>Amount : </span>
          {isModifying ? (
            <input
              type="number"
              name="amount"
              ref={amountRef}
              defaultValue={invoice.amount}
              required
            />
          ) : (
            <span id="invoiceAmout">{invoice.amount} €</span>
          )}

          <span>Company : </span>
          {isModifying ? (
            <CompanySelector
              companies={companies}
              handleCompanyChange={handleCompanyChange}
              currentCompany={company}
            />
          ) : (
            <span
              id="invoiceCompany"
              onClick={() => {
                navigate(`/company/${company.id}`);
              }}
              style={{ cursor: "pointer" }}
            >
              {company.name}
            </span>
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
            <span
              id="invoiceContact"
              onClick={() => {
                navigate(`/contact/${contact.id}`);
              }}
              style={{ cursor: "pointer" }}
            >{`${contact.firstname} ${contact.lastname}`}</span>
          )}

          <span>Date : </span>
          {isModifying ? (
            <input
              type="date"
              name="date"
              ref={receivedRef}
              defaultValue={`${year}-${month}-${day}`}
              required
            />
          ) : (
            <span id="invoiceReceived">{`${day}-${month}-${year}`}</span>
          )}
          <span>Paid status : </span>
          {isModifying ? (
            <label htmlFor="paid" className="switchToggle">
              {invoice.paid ? (
                <input
                  type="checkbox"
                  name="paid"
                  id="paid"
                  className="switchCheck"
                  ref={paidRef}
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  name="paid"
                  id="paid"
                  className="switchCheck"
                  ref={paidRef}
                />
              )}
              <span className="slider"></span>
            </label>
          ) : (
            <span>{invoice.paid ? "Paid" : "To be paid"}</span>
          )}
        </div>
        {isAuth.admin ? (
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
            handleModif={handleModif}
          />
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default Invoice;
