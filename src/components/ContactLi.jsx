function ContactLi({ contact, companies }) {
    let company = companies.find((company) => company.id === contact.company);
    return (
        <li>
            <span className="svg">
                <i className="fas fa-user"></i>
            </span>
            <span className="contactName">{contact.name}</span>
            <span className="contactMail">{contact.mail}</span>
            <span className="contactCompany">{company.name}</span>
        </li>
    );
}

export default ContactLi;
