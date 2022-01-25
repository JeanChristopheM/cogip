import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InvoiceControls from "./InvoiceControls.jsx";
import CompanySelector from "../reusables/CompanySelector.jsx";
import ContactSelector from "../reusables/ContactSelector.jsx";
import handleRequests from "../../logic/handleRequests";
import { invoiceVerify } from "../../logic/formValidation.js";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function Invoice({ invoices, companies, contacts, setIsLoaded, isAuth }) {
  const loaded = invoices.length > 0 ? true : false;
  let params = useParams();
  const navigate = useNavigate();
  const invoice = invoices.find((el) => el.id == params.invoiceId);
  const company = invoice
    ? companies.find((el) => el.id == invoice.company)
    : null;
  const contact = invoice
    ? contacts.find((el) => el.id == invoice.contact)
    : null;
  let year = invoice ? invoice.received.slice(0, 4) : null;
  let month = invoice ? invoice.received.slice(5, 7) : null;
  let day = invoice ? invoice.received.slice(8, 10) : null;

  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(company);
  const [selectedContact, setSelectedContact] = useState(contact);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!invoice) navigate("/invoices");
  }, [invoices]);
  const handleContactChange = (value) => {
    setSelectedContact(
      contacts.find((el) => `${el.firstname} ${el.lastname}` == value)
    );
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
      contact: contacts
        .find((el) => el.name == selectedContact.name)
        .id.toString(),
      received: receivedRef.current.value,
      paid: paidRef.current.checked,
    };
    let check = invoiceVerify(formData);
    setIsFetching(true);
    if (check.ok) {
      const { status, message, dataPackage } = await handleRequests(
        "PUT",
        `https://csharpproject.somee.com/api/invoice/${params.invoiceId}`,
        isAuth.jwt,
        formData
      );
      setIsLoaded(false);
      setIsFetching(false);
      if (status === 200) {
        setTimeout(() => {
          toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }, 250);
      } else {
        setTimeout(() => {
          toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }, 250);
      }
    } else {
      setIsFetching(false);
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
  const handleDelete = async () => {
    setIsFetching(true);
    const { status, message } = await handleRequests(
      "DELETE",
      `https://csharpproject.somee.com/api/Invoice/${invoice.id}`,
      isAuth.jwt
    );
    setIsFetching(false);
    if (status !== 200) {
      toast.error("There was an error deleting this invoice", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    sessionStorage.setItem("cogipToast", "Success !");
    setIsDeleting(false);
    setIsLoaded(false);
  };
  return (
    <main>
      {isFetching || !loaded || !invoice ? (
        <div className="fetching">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
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
          {isAuth.role == "Admin" ? (
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
              handleDelete={handleDelete}
            />
          ) : (
            ""
          )}
        </div>
      )}
      <ToastContainer />
    </main>
  );
}

export default Invoice;
