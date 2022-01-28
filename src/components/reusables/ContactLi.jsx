import { useNavigate } from "react-router-dom";

function ContactLi({ contact, companies }) {
  const navigate = useNavigate();
  /* let company = companies.find(
    (company) => company.id == contact.contactcompany 
  ); */
  let company =
    contact.companies.length === 0
      ? "No company yet"
      : contact.companies.length === 1
      ? companies.find((el) => el.id === contact.companies[0])
      : "Multiple";
  return (
    <li>
      <span className="svg">
        <i className="fas fa-user"></i>
      </span>
      <span
        className="contactName"
        onClick={() => {
          navigate(`/contact/${contact.id}`);
        }}
        style={{ cursor: "pointer" }}
      >
        {contact.firstname + " " + contact.lastname}
      </span>
      <span className="contactMail">{contact.email}</span>
      {typeof company === "string" ? (
        <span
          className="contactCompany"
          style={{ color: "var(--clr-text-low)" }}
        >
          {company}
        </span>
      ) : (
        <span
          className="contactCompany"
          onClick={() => {
            navigate(`/company/${company.id}`);
          }}
          style={{ cursor: "pointer" }}
        >
          {company.name}
        </span>
      )}
    </li>
  );
}

export default ContactLi;
