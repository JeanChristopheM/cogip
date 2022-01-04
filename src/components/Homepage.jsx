import React from "react";
import CompanyLi from "./CompanyLi.jsx";
import ContactLi from "./ContactLi.jsx";
import InvoiceLi from "./InvoiceLi.jsx";

function Homepage({ userdata, companies, invoices, contacts }) {
    return (
        <main className="homepage">
            <section className="invoices card">
                <h2>Invoices</h2>
                <ul>
                    {invoices.map((entry) => {
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
            <section className="contacts card">
                <h2>Contacts</h2>
                <ul>
                    {contacts.map((entry) => {
                        return (
                            <ContactLi
                                contact={entry}
                                key={entry.id}
                                companies={companies}
                            />
                        );
                    })}
                </ul>
            </section>
            <section className="companies card">
                <h2>Companies</h2>
                <ul>
                    {companies.map((entry) => {
                        return <CompanyLi data={entry} key={entry.id} />;
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Homepage;
