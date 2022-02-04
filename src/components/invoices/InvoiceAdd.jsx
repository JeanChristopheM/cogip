import { useState, useEffect } from "react";
import handleRequests from "../../logic/handleRequests";
import { invoiceVerify } from "../../logic/formValidation";

import CompanySelector from "../reusables/CompanySelector";
import ContactSelector from "../reusables/ContactSelector";
import InvoiceIllustration from "../reusables/InvoiceIllustration.jsx";
// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function InvoiceAdd({ contacts, companies, categories, setIsLoaded, isAuth }) {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedContact, setSelectedContact] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const message = sessionStorage.getItem("cogipToast");
    if (!message) return;
    const messageArray = message.split(",");
    toast[messageArray[0]](messageArray[1], {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    sessionStorage.removeItem("cogipToast");
  }, [isFetching]);
  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
  };
  const handleContactChange = (value) => {
    setSelectedContact(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    /* Instantiate object with form data */
    const formData = {
      reference: e.target.reference.value,
      amount: parseInt(e.target.amount.value),
      company: selectedCompany ? selectedCompany.id : null,
      contact: selectedContact ? selectedContact.id : null,
      received: e.target.date.value,
      dueDate: e.target.dueDate.value,
      paidStatus: e.target.paid.checked,
      category: parseInt(e.target.category.value),
      due: e.target.paid.checked ? 0 : parseInt(e.target.amount.value),
      paid: e.target.paid.checked ? parseInt(e.target.amount.value) : 0,
    };
    console.log(formData);

    // Data verification
    let check = invoiceVerify(formData);
    // Posting data if OK
    if (check.ok) {
      const { status, message, dataPackage } = await handleRequests(
        "POST",
        "https://csharpproject.somee.com/api/Invoice",
        isAuth.jwt,
        formData
      );
      setIsFetching(false);
      setIsLoaded(false);
      if (status === 200)
        sessionStorage.setItem("cogipToast", "success,Success !");
      else sessionStorage.setItem("cogipToast", `error,${message}`);
    } else {
      setIsFetching(false);
      // Handling Errors
      const issues = Object.keys(check);
      setTimeout(() => {
        for (let issue of issues) {
          if (issue !== "ok") {
            toast.error(check[issue], {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        }
      }, 250);
    }
  };

  return (
    <main>
      <div className="invoiceAdd card">
        <h2>Fill up the form</h2>
        <form className="invoiceForm" onSubmit={handleSubmit}>
          <div className="formContent">
            <fieldset>
              <legend>Invoice details</legend>
              <div>
                <label htmlFor="reference">Reference : </label>
                <input
                  type="text"
                  name="reference"
                  minLength="3"
                  maxLength="45"
                  required
                />
              </div>
              <div>
                <label htmlFor="date">Date of reception : </label>
                <input type="date" name="date" required />
              </div>
              <div>
                <label htmlFor="company">Company : </label>
                <CompanySelector
                  companies={companies}
                  handleCompanyChange={handleCompanyChange}
                  currentCompany={{ name: "" }}
                />
              </div>
              <div>
                <label htmlFor="contact">Contact : </label>
                <ContactSelector
                  contacts={contacts}
                  companies={companies}
                  selectedCompany={selectedCompany}
                  handleContactChange={handleContactChange}
                  currentContact={{ name: "" }}
                  name={"company"}
                />
              </div>
              <div>
                <label htmlFor="category">Category : </label>
                <select name="category" id="category">
                  <option value="">Select a category</option>
                  {categories
                    ? categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.category}
                        </option>
                      ))
                    : null}
                </select>
              </div>
            </fieldset>
            <fieldset>
              <legend>Payement</legend>
              <div>
                <label htmlFor="amount">Amount : </label>
                <input type="number" name="amount" required />
              </div>
              <div>
                <label htmlFor="dueDate">Due date : </label>
                <input type="date" name="dueDate" required />
              </div>
              <div>
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
              </div>
            </fieldset>
          </div>
          <button>Submit</button>
        </form>
        <div className="formIllu">
          <InvoiceIllustration />
        </div>
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
