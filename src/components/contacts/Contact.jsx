import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactControls from "./ContactControls.jsx";
import CompanySelector from "../reusables/CompanySelector.jsx";
import handleRequests from "../../logic/handleRequests";
import { contactVerify } from "../../logic/formValidation";
import ContactIllustration from "../reusables/ContactIllustration.jsx";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function Contact({ contacts, companies, setIsLoaded, isAuth }) {
  const loaded = contacts.length > 0 ? true : false;
  const params = useParams();
  const navigate = useNavigate();
  const contact = contacts.find((el) => el.id == params.contactId);
  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [selectorAmount, setSelectorAmount] = useState(
    contact.companies.length
  );
  useEffect(() => {
    if (!contact) navigate("/contacts");
  }, [contacts]);

  const handleCompanyChange = (company) => {
    return;
  };
  const getCompaniesArray = (nodeList) => {
    let compArr = [];
    for (let node of nodeList) {
      compArr.push(
        companies.find((company) => (company.name == node.value ? true : false))
          .id
      );
    }
    return [...new Set([...compArr])];
  };
  const submit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const formData = {
      firstname: e.target.contactFirstname.value,
      lastname: e.target.contactLastname.value,
      companies: getCompaniesArray(e.target.company),
      email: e.target.contactEmail.value,
      phonenumber: e.target.contactPhonenumber.value,
    };
    let check = contactVerify(formData);
    if (check.ok) {
      const { status, message, dataPackage } = await handleRequests(
        "PUT",
        `https://csharpproject.somee.com/api/contact/${params.contactId}`,
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
  const handleModif = async (e) => {
    return;
  };
  const handleDelete = async () => {
    setIsFetching(true);
    const { status, message } = await handleRequests(
      "DELETE",
      `https://csharpproject.somee.com/api/Contact/${contact.id}`,
      isAuth.jwt
    );
    setIsFetching(false);
    if (status !== 200) {
      toast.error("There was an error deleting this contact", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    sessionStorage.setItem("cogipToast", "Success !");
    setIsDeleting(false);
    setIsLoaded(false);
  };
  const handleAddCompSelector = () => {
    setSelectorAmount((amount) => amount + 1);
  };
  const handleRemoveCompSelector = () => {
    setSelectorAmount((amount) => (amount > 1 ? amount - 1 : amount));
  };
  const renderSelector = (amount) => {
    let selectorArray = [];
    for (let x = 0; x < amount; x++) {
      selectorArray.push(
        <div className="contactGrid__section--child selectors" key={x}>
          <label>Company Selector : </label>
          <CompanySelector
            companies={companies}
            currentCompany={
              companies.filter((el) => contact.companies.includes(el.id))[x] ||
              ""
            }
            handleCompanyChange={handleCompanyChange}
            name={"company"}
          />
        </div>
      );
    }
    return selectorArray;
  };
  return (
    <main>
      {isFetching || !loaded || !contact ? (
        <div className="fetching">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <div className="card">
          <h2>Details :</h2>
          {isModifying ? (
            <form className="contactGrid" onSubmit={submit} method="post">
              <fieldset className="contactGrid__section">
                <legend>Contact</legend>
                <div className="contactGrid__section--child infos">
                  <label htmlFor="contactFirstname" className="labels">
                    Firstname :{" "}
                  </label>
                  <input
                    type="text"
                    id="contactFirstname"
                    name="contactFirstname"
                    defaultValue={contact.firstname}
                  />
                </div>
                <div className="contactGrid__section--child infos">
                  <label htmlFor="contactLastname" className="labels">
                    Lastname :{" "}
                  </label>
                  <input
                    type="text"
                    id="contactLastname"
                    name="contactLastname"
                    defaultValue={contact.lastname}
                  />
                </div>
                <div className="contactGrid__section--child infos">
                  <label htmlFor="contactEmail" className="labels">
                    Email :{" "}
                  </label>
                  <input
                    type="text"
                    id="contactEmail"
                    name="contactEmail"
                    defaultValue={contact.email}
                  />
                </div>
                <div className="contactGrid__section--child infos">
                  <label htmlFor="contactPhonenumber" className="labels">
                    Phone number :{" "}
                  </label>
                  <input
                    type="text"
                    id="contactPhonenumber"
                    name="contactPhonenumber"
                    defaultValue={contact.phonenumber}
                  />
                </div>
              </fieldset>

              <fieldset className="contactGrid__section from">
                <legend>
                  From
                  <button
                    type="button"
                    id="addCompanySelector"
                    onClick={handleAddCompSelector}
                    style={{ padding: "0 .5rem" }}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    id="removeCompanySelector"
                    onClick={handleRemoveCompSelector}
                    style={{ padding: "0 .5rem" }}
                  >
                    -
                  </button>
                </legend>
                {renderSelector(selectorAmount)}
              </fieldset>
              <fieldset className="decoration">
                <ContactIllustration />
              </fieldset>
              <ContactControls
                isModifying={isModifying}
                setIsModifying={setIsModifying}
                isDeleting={isDeleting}
                setIsDeleting={setIsDeleting}
                handleModif={handleModif}
                handleDelete={handleDelete}
              />
            </form>
          ) : (
            <div className="contactGrid">
              <section className="contactGrid__section">
                <h3>Contact</h3>
                <div className="contactGrid__section--child infos">
                  <span className="labels">Firstname : </span>
                  <span id="contactFirstname" className="bigger">
                    {contact.firstname}
                  </span>
                </div>
                <div className="contactGrid__section--child infos">
                  <span className="labels">Lastname : </span>
                  <span id="contactLastname" className="bigger">
                    {contact.lastname}
                  </span>
                </div>
                <div className="contactGrid__section--child infos">
                  <span className="labels">Email : </span>
                  <span id="contactEmail">{contact.email}</span>
                </div>
                <div className="contactGrid__section--child infos">
                  <span className="labels">Phone number : </span>
                  <span id="contactPhonenumber">{contact.phonenumber}</span>
                </div>
              </section>
              <section className="contactGrid__section">
                <h3>From</h3>
                <div className="contactGrid__section--child">
                  <div className="companyContainer">
                    {companies.map((el) => {
                      if (contact.companies.includes(el.id))
                        return (
                          <div className="companyCard" key={el.id}>
                            <p
                              id="contactCompany"
                              onClick={() => {
                                navigate(`/company/${el.id}`);
                              }}
                              style={{ cursor: "pointer" }}
                              key={el.id}
                            >
                              {el.name}
                            </p>
                            <p>{el.status}</p>
                          </div>
                        );
                    })}
                  </div>
                </div>
              </section>
              <section className="decoration">
                <ContactIllustration />
              </section>
              {isAuth.role == "Admin" ? (
                <ContactControls
                  isModifying={isModifying}
                  setIsModifying={setIsModifying}
                  isDeleting={isDeleting}
                  setIsDeleting={setIsDeleting}
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

export default Contact;
