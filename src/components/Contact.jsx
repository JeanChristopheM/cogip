import { useState } from "react";
import { useParams } from "react-router-dom";
import ContactControls from "./ContactControls.jsx";
import CompanySelector from "./CompanySelector";

function Contact({ contacts, companies }) {
  const params = useParams();
  const contact = contacts.find((el) => el.id == params.contactId);
  const company = companies.find((el) => el.id == contact.contactcompany);

  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
              placeholder={contact.firstname}
            />
          ) : (
            <span id="contactFirstname">{contact.firstname}</span>
          )}
          <span>Lastname : </span>
          {isModifying ? (
            <input
              type="text"
              name="contactLastname"
              placeholder={contact.lastname}
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
            />
          ) : (
            <span id="contactCompany">{company.name}</span>
          )}
          <span>Email : </span>
          {isModifying ? (
            <input
              type="text"
              name="contactEmail"
              placeholder={contact.email}
            />
          ) : (
            <span id="contactEmail">{contact.email}</span>
          )}
          <span>Phone number : </span>
          {isModifying ? (
            <input
              type="number"
              name="contactPhonenumber"
              placeholder={contact.phonenumber}
            />
          ) : (
            <span id="contactPhonenumber">{contact.phonenumber}</span>
          )}
        </div>
        <ContactControls
          isModifying={isModifying}
          setIsModifying={setIsModifying}
          isDeleting={isDeleting}
          setIsDeleting={setIsDeleting}
        />
      </div>
    </main>
  );
}

export default Contact;
