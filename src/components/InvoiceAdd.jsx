import { useState } from "react";
import postData from "../logic/postData";
import { invoiceVerify } from "../logic/formValidation";

import CompanySelector from "./CompanySelector";
import ContactSelector from "./ContactSelector";

function InvoiceAdd({ contacts, companies, setIsLoaded }) {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedContact, setSelectedContact] = useState("");

  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
  };
  const handleContactChange = (value) => {
    setSelectedContact(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = contacts.find(
      (el) => `${el.firstname} ${el.lastname}` == selectedContact
    );
    const formData = {
      reference: e.target.reference.value,
      amount: e.target.amount.value,
      company: selectedCompany.id.toString(),
      contact: contact.id.toString(),
      received: e.target.date.value,
      paid: e.target.paid.checked,
    };
    let check = invoiceVerify(formData);
    if (check.ok) {
      console.log(formData);
      await postData("https://csharpproject.somee.com/api/Invoice", formData);
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
        <h2>Fill up the form</h2>
        <form className="invoiceForm" onSubmit={handleSubmit}>
          <ul>
            <li>
              <span>Reference : </span>
              <input
                type="text"
                name="reference"
                minLength="3"
                maxLength="45"
                required
              />
            </li>
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
                name={"company"}
              />
            </li>
            <li>
              <span>Date of reception : </span>
              <input type="date" name="date" required />
            </li>
            <li>
              <span>Amount : </span>
              <input type="number" name="amount" required />
            </li>
            <li>
              <span>Paid status : </span>
              <label htmlFor="paid" className="switchToggle">
                <input
                  type="checkbox"
                  name="paid"
                  id="paid"
                  className="switchCheck"
                />
                <span className="slider"></span>
              </label>
            </li>
          </ul>
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default InvoiceAdd;
