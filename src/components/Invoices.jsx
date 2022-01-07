import { useNavigate } from "react-router-dom";
import InvoiceLi from "./InvoiceLi.jsx";

function Invoices({ data, companies, setInvoiceId }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };
  return (
    <main>
      <section className="invoices card">
        <h2>
          Invoices
          <i
            className="fas fa-plus-square plusButton"
            id="invoiceAdd"
            onClick={handleAdd}
          ></i>
        </h2>
        <ul>
          {data.map((entry) => {
            return (
              <InvoiceLi
                invoice={entry}
                key={entry.id}
                companies={companies}
                setInvoiceId={setInvoiceId}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Invoices;
