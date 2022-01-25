import InvoiceLi from "../reusables/InvoiceLi.jsx";
const LastFiveInvoices = ({
  handleAdd,
  navigate,
  invoices,
  companies,
  setPage,
  setInvoiceId,
}) => {
  return (
    <section className="invoices card">
      <h2>
        <span
          onClick={() => {
            navigate("/invoices");
          }}
          style={{ cursor: "pointer" }}
        >
          Last 5 invoices
        </span>
        <button
          type="button"
          id="invoiceAdd"
          onClick={handleAdd}
          style={{ padding: "0 .5rem" }}
        >
          +
        </button>
      </h2>
      <ul>
        {invoices.length > 0 ? (
          invoices.slice(0, 5).map((entry) => {
            return (
              <InvoiceLi
                invoice={entry}
                key={entry.id}
                companies={companies}
                setPage={setPage}
                setInvoiceId={setInvoiceId}
              />
            );
          })
        ) : (
          <li>
            <div className="spinner-centerer">
              <div className="lds-dual-ring"></div>
            </div>
          </li>
        )}
      </ul>
    </section>
  );
};
export default LastFiveInvoices;
