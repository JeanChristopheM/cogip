import { useState } from "react";
import handleRequests from "../logic/handleRequests";
import { invoiceVerify } from "../logic/formValidation";

import CompanySelector from "./CompanySelector";
import ContactSelector from "./ContactSelector";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function InvoiceAdd({ contacts, companies, setIsLoaded, isAuth }) {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedContact, setSelectedContact] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
  };
  const handleContactChange = (value) => {
    setSelectedContact(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const contact = contacts.find(
      (el) => `${el.firstname} ${el.lastname}` == selectedContact
    );
    /* Instantiate object with form data */
    const formData = {
      reference: e.target.reference.value,
      amount: e.target.amount.value,
      company: selectedCompany.id.toString(),
      contact: contact.id.toString(),
      received: e.target.date.value,
      paid: e.target.paid.checked,
    };
    /* Data verification */
    let check = invoiceVerify(formData);
    /* Posting data if OK */
    if (check.ok) {
      const { status, message, dataPackage } = await handleRequests(
        "POST",
        "https://csharpproject.somee.com/api/Invoice",
        isAuth.jwt,
        formData
      );
      setIsFetching(false);
      setIsLoaded(false);
      if (status === 200) {
        setTimeout(() => {
          toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }, 500);
      } else {
        setTimeout(() => {
          toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }, 500);
      }
    } else {
      setIsFetching(false);
      /* Handling Errors */
      const issues = Object.keys(check);
      setTimeout(() => {
        for (let issue of issues) {
          if (issue !== "ok") {
            toast.error(check[issue], {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        }
      }, 500);
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
        <ToastContainer />
      </div>
      {isFetching ? (
        <div className="fetching dark">
          <div className="lds-dual-ring"></div>
        </div>
      ) : null}
    </main>
  );
}

export default InvoiceAdd;
