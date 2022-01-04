function Invoice({ invoices, invoiceId }) {
    const invoice = invoices.find((el) => el.id === invoiceId);
    return (
        <main>
            <div className="card">
                <h2>Details about invoice {invoice.reference}</h2>
            </div>
        </main>
    );
}

export default Invoice;
