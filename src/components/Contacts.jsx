import ContactLi from "./ContactLi.jsx";

function Contacts({ data, companies }) {
    return (
        <main>
            <section className="contacts card">
                <h2>Contacts</h2>
                <ul>
                    {data.map((entry) => {
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
        </main>
    );
}

export default Contacts;
