import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactControls from "./ContactControls.jsx";
import CompanySelector from "./CompanySelector";
import putData from "../logic/putData";
import { contactVerify } from "../logic/formValidation.js";

function Contact({ contacts, companies, setIsLoaded, isAuth }) {
  const params = useParams();
  const navigate = useNavigate();
  const contact = contacts.find((el) => el.id == params.contactId);
  const company = companies.find((el) => el.id == contact.contactcompany);

  const [selectedCompany, setSelectedCompany] = useState(company);
  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
    if (check.ok) {
      console.log(formData);
      await putData(
        `https://csharpproject.somee.com/api/contact/${params.contactId}`,
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
              type="number"
              name="contactPhonenumber"
              defaultValue={contact.phonenumber}
              ref={phonenumberRef}
            />
          ) : (
            <span id="contactPhonenumber">{contact.phonenumber}</span>
          )}
        </div>
        {isAuth.admin ? (
          <ContactControls
            isModifying={isModifying}
            setIsModifying={setIsModifying}
            isDeleting={isDeleting}
            setIsDeleting={setIsDeleting}
            handleModif={handleModif}
          />
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default Contact;
