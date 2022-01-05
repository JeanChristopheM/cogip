import { useParams } from "react-router-dom";

function Invoice({ invoices, invoiceId }) {
    let params = useParams();
    const invoice = invoices.find((el) => el.id == params.invoiceId);
    return (
        <main>
            <div className="card">
                <h2>Details about invoice {invoice.reference}</h2>
            </div>
        </main>
    );
}

export default Invoice;
