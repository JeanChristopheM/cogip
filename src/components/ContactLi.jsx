function ContactLi({ contact, companies }) {
    let company = companies.find(
        (company) => company.id == contact.contactcompany
    );
    return (
        <li>
            <span className="svg">
                <i className="fas fa-user"></i>
            </span>
            <span className="contactName">
                {contact.firstname + contact.lastname}
            </span>
            <span className="contactMail">{contact.email}</span>
            <span className="contactCompany">{company.name}</span>
        </li>
    );
}

export default ContactLi;
