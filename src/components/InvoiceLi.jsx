import { useNavigate } from "react-router-dom";

function InvoiceLi({ invoice, companies }) {
    let navigate = useNavigate();
    let company = companies.find((company) => company.id === invoice.company);
    let arrow = company.status === "Client" ? "down" : "up";
    let year = invoice.received.slice(0, 4);
    let month = invoice.received.slice(5, 7);
    let day = invoice.received.slice(8, 10);
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
            <span className="invoiceDate">{`${day}-${month}-${year}`}</span>
        </li>
    );
}

export default InvoiceLi;
