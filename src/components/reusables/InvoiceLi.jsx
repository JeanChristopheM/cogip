import { useNavigate } from "react-router-dom";
import { dateFormatter } from "../../logic/dateFormatter";

function InvoiceLi({ invoice, companies }) {
  let navigate = useNavigate();
  let company = companies.find((company) => company.id === invoice.company);
  let arrow = company.status === "Customer" ? "down" : "up";
  return (
    <li className={"invoiceLi"}>
      <span className="svg">
        <i className={`fas fa-arrow-${arrow}`}></i>
      </span>
      <span
        className="invoiceName"
        onClick={() => {
          navigate(`/company/${company.id}`);
        }}
      >
        {company.name}
      </span>
      <span
        className="invoiceNumber"
        onClick={() => {
          navigate(`/invoice/${invoice.id}`);
        }}
      >
        {invoice.reference}
      </span>
      <span className="invoiceType">{company.status}</span>
      <span className="invoiceDate">{dateFormatter(invoice.received)}</span>
    </li>
  );
}

export default InvoiceLi;
