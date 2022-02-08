import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InvoiceControls from "./InvoiceControls.jsx";
import CompanySelector from "../reusables/CompanySelector.jsx";
import ContactSelector from "../reusables/ContactSelector.jsx";
import handleRequests from "../../logic/handleRequests";
import { invoiceVerify } from "../../logic/formValidation.js";
import { dateFormatter } from "../../logic/dateFormatter";
import InvoiceIllustration from "../reusables/InvoiceIllustration.jsx";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function Invoice({ invoices, companies, contacts, setIsLoaded, isAuth }) {
  let params = useParams();
  const navigate = useNavigate();
  const loaded = invoices.length > 0 ? true : false;
  const invoice = invoices.find((el) => el.id == params.invoiceId);
  const company = invoice
    ? companies.find((el) => el.id == invoice.company)
    : null;
  const contact = invoice
    ? invoice.contact !== ""
      ? contacts.find((el) => el.id == invoice.contact)
      : ""
    : "";
  let year = invoice ? invoice.received.slice(0, 4) : null;
  let month = invoice ? invoice.received.slice(5, 7) : null;
  let day = invoice ? invoice.received.slice(8, 10) : null;

  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(company);
  const [selectedContact, setSelectedContact] = useState(contact);
  const [isFetching, setIsFetching] = useState(false);
  const [newDue, setNewDue] = useState(null);

  useEffect(() => {
    if (!invoice) navigate("/invoices");
  }, [invoices]);
  const handleContactChange = (value) => {
    setSelectedContact(value);
  };
  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
  };

  const amountRef = useRef();
  const receivedRef = useRef();
  const paidRef = useRef();
  const dueRef = useRef();
  const dueDateRef = useRef();
  //. Submitting modification function.
  const submit = async (e) => {
    const formData = {
      reference: e.target.reference.value,
      amount: e.target.amount.value,
      company: selectedCompany.id.toString(),
      contact:
        e.target.contact.value === ""
          ? 0
          : contacts.find(
              (el) => `${el.firstname} ${el.lastname}` == e.target.contact.value
            ),
      received: receivedRef.current.value,
      paidStatus:
        amountRef.current.value - paidRef.current.value === 0 ? true : false,
      paid: paidRef.current.value,
      due: dueRef.current.textContent.slice(0, -1),
      dueDate: dueDateRef.current.value,
    };
    console.log(formData);
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
  const handleModif = async () => {
    return;
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
  const handleAmountChange = (e) => {
    if (e.target.value < paidRef.current.value)
      paidRef.current.value = e.target.value;
    setNewDue(parseInt(e.target.value) - parseInt(paidRef.current.value));
  };
  const handlePaidChange = (e) => {
    if (parseInt(amountRef.current.value) < parseInt(e.target.value)) {
      e.target.value = amountRef.current.value;
    }
    setNewDue(parseInt(amountRef.current.value) - parseInt(e.target.value));
  };
  useEffect(() => {
    setNewDue(null);
  }, [isDeleting, isModifying]);
  return (
    <main>
      {isFetching || !loaded || !invoice ? (
        <div className="fetching">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <div className="card">
          <h2>
            {company.status === "Supplier"
              ? "Incoming bill "
              : "Outgoing bill "}
            details
          </h2>

          {isModifying ? (
            <form className="invoiceGrid" onSubmit={submit}>
              <fieldset className="invoiceGrid__section--ref">
                <div>
                  <label htmlFor="reference" className="labels">
                    Reference :{" "}
                  </label>
                  <input
                    type="text"
                    name="reference"
                    id="reference"
                    defaultValue={invoice.reference}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="labels">
                    Date :{" "}
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    ref={receivedRef}
                    defaultValue={`${year}-${month}-${day}`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dueDate" className="labels">
                    Due date :{" "}
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    ref={dueDateRef}
                    defaultValue={`${invoice.dueDate.slice(
                      0,
                      4
                    )}-${invoice.dueDate.slice(5, 7)}-${invoice.dueDate.slice(
                      8,
                      10
                    )}`}
                    required
                  />
                </div>
              </fieldset>
              <div className="lowerBlock">
                <fieldset className="invoiceGrid__section--relations">
                  <legend>Company : </legend>
                  <div className="company">
                    <CompanySelector
                      companies={companies}
                      handleCompanyChange={handleCompanyChange}
                      currentCompany={company}
                      className="company__value"
                    />
                  </div>
                  <div>
                    <span className="labels">Contact : </span>
                    <ContactSelector
                      contacts={contacts}
                      currentContact={contact}
                      currentCompany={company}
                      selectedCompany={selectedCompany}
                      handleContactChange={handleContactChange}
                    />
                  </div>
                </fieldset>
                <fieldset className="invoiceGrid__section--payment">
                  <legend>Total : </legend>
                  <div className="total">
                    <input
                      type="number"
                      name="amount"
                      ref={amountRef}
                      id="amount"
                      defaultValue={invoice.amount}
                      className="total__value"
                      onChange={handleAmountChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="paid" className="labels">
                      Paid :{" "}
                    </label>
                    <input
                      type="text"
                      name="paid"
                      id="paid"
                      defaultValue={invoice.paid}
                      ref={paidRef}
                      onChange={handlePaidChange}
                    />
                  </div>
                  <div>
                    <span className="labels">Due : </span>
                    <span ref={dueRef}>
                      {newDue !== null ? newDue : invoice.due}€
                    </span>
                  </div>
                  <div>
                    <span className="labels">Paid status : </span>
                    <span>{invoice.paidStatus ? "Paid" : "To be paid"}</span>
                  </div>
                </fieldset>
                <section className="decoration">
                  <InvoiceIllustration />
                </section>
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
                handleModif={handleModif}
                handleDelete={handleDelete}
              />
            </form>
          ) : (
            <div className="invoiceGrid">
              <section className="invoiceGrid__section--ref">
                <div>
                  <span className="labels">Reference : </span>
                  <span id="invoiceReference">{invoice.reference}</span>
                </div>
                <div>
                  <span className="labels">Date : </span>
                  <span id="invoiceReceived">{`${day}-${month}-${year}`}</span>
                </div>
                <div>
                  <span className="labels">Due date : </span>
                  <span>{dateFormatter(invoice.dueDate)}</span>
                </div>
              </section>
              <div className="lowerBlock">
                <section className="invoiceGrid__section--relations">
                  <h3>Company : </h3>
                  <div className="company">
                    <span
                      id="invoiceCompany"
                      onClick={() => {
                        navigate(`/company/${company.id}`);
                      }}
                      style={{ cursor: "pointer" }}
                      className="company__value"
                    >
                      {company.name}
                    </span>
                  </div>
                  <div>
                    <span className="labels">Contact : </span>
                    {contact ? (
                      <span
                        id="invoiceContact"
                        onClick={() => {
                          navigate(`/contact/${contact.id}`);
                        }}
                        style={{ cursor: "pointer" }}
                      >{`${contact.firstname} ${contact.lastname}`}</span>
                    ) : (
                      <span>None</span>
                    )}
                  </div>
                </section>
                <section className="invoiceGrid__section--payment">
                  <h3>Total : </h3>
                  <div className="total">
                    <span id="invoiceAmout" className="total__value">
                      {invoice.amount} €
                    </span>
                  </div>
                  <div>
                    <span className="labels">Paid : </span>
                    <span>{invoice.paid}€</span>
                  </div>
                  <div>
                    <span className="labels">Due : </span>
                    <span>{invoice.due}€</span>
                  </div>
                  <div>
                    <span className="labels">Paid status : </span>
                    <span>{invoice.paidStatus ? "Paid" : "To be paid"}</span>
                  </div>
                </section>
                <section className="decoration">
                  <InvoiceIllustration />
                </section>
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
        </div>
      )}
      <ToastContainer />
    </main>
  );
}

export default Invoice;
