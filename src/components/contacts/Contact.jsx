import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactControls from "./ContactControls.jsx";
import CompanySelector from "../reusables/CompanySelector.jsx";
import handleRequests from "../../logic/handleRequests";
import { contactVerify } from "../../logic/formValidation";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// end toaster

function Contact({ contacts, companies, setIsLoaded, isAuth }) {
  const loaded = contacts.length > 0 ? true : false;
  const params = useParams();
  const navigate = useNavigate();
  const contact = contacts.find((el) => el.id == params.contactId);
  const company = contact
    ? companies.find((el) => el.id == contact.contactcompany)
    : null;

  const [selectedCompany, setSelectedCompany] = useState(company);
  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!contact) navigate("/contacts");
  }, [contacts]);

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phonenumberRef = useRef();
  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
  };
  const handleModif = async () => {
    const formData = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      contactcompany: selectedCompany.id.toString(),
      email: emailRef.current.value,
      phonenumber: phonenumberRef.current.value,
    };
    let check = contactVerify(formData);
    setIsFetching(true);
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
  return (
    <main>
      {isFetching || !loaded || !contact ? (
        <div className="fetching">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <div className="card">
          <h2>
            {contact.firstname} {contact.lastname}
          </h2>
          <div className="contactGrid">
            <span>Firstname : </span>
            {isModifying ? (
              <input
                type="text"
                name="contactFirstname"
                defaultValue={contact.firstname}
                ref={firstnameRef}
              />
            ) : (
              <span id="contactFirstname">{contact.firstname}</span>
            )}
            <span>Lastname : </span>
            {isModifying ? (
              <input
                type="text"
                name="contactLastname"
                defaultValue={contact.lastname}
                ref={lastnameRef}
              />
            ) : (
              <span id="contactLastname">{contact.lastname}</span>
            )}
            <span>Company : </span>
            {isModifying ? (
              <CompanySelector
                currentCompany={company}
                companies={companies}
                name={"contactCompany"}
                handleCompanyChange={handleCompanyChange}
              />
            ) : (
              <span
                id="contactCompany"
                onClick={() => {
                  navigate(`/company/${company.id}`);
                }}
                style={{ cursor: "pointer" }}
              >
                {company.name}
              </span>
            )}
            <span>Email : </span>
            {isModifying ? (
              <input
                type="text"
                name="contactEmail"
                defaultValue={contact.email}
                ref={emailRef}
              />
            ) : (
              <span id="contactEmail">{contact.email}</span>
            )}
            <span>Phone number : </span>
            {isModifying ? (
              <input
                type="text"
                name="contactPhonenumber"
                defaultValue={contact.phonenumber}
                ref={phonenumberRef}
              />
            ) : (
              <span id="contactPhonenumber">{contact.phonenumber}</span>
            )}
          </div>
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
      <ToastContainer />
    </main>
  );
}

export default Contact;
