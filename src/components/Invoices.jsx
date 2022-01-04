import InvoiceLi from "./InvoiceLi.jsx";

function Invoices({ data, companies }) {
    return (
        <main>
            <section className="invoices card">
                <h2>Invoices</h2>
                <ul>
                    {data.map((entry) => {
                        return (
                            <InvoiceLi
                                invoice={entry}
                                key={entry.id}
                                companies={companies}
                            />
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Invoices;
