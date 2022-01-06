import { useParams } from "react-router-dom";

function Contact({ contacts }) {
    const params = useParams();
    const contact = contacts.find((el) => el.id == params.contactId);
    return (
        <main>
            <div className="card">Contact {contact.firstname}</div>
        </main>
    );
}

export default Contact;
