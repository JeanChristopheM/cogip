function ContactSelector({
    contacts,
    selectedCompany,
    currentContact,
    setSelectedContact,
}) {
    const handleChange = (e) => {
        setSelectedContact(e.target.value);
    };
    return (
        <select
            onChange={handleChange}
            defaultValue={`${currentContact.firstname} ${currentContact.lastname}`}
        >
            <option value="">Select a contact</option>
            {contacts.map((contact) => {
                if (selectedCompany.id == contact.contactcompany) {
                    return (
                        <option
                            value={`${contact.firstname} ${contact.lastname}`}
                            key={contact.id}
                        >
                            {`${contact.firstname} ${contact.lastname}`}
                        </option>
                    );
                }
            })}
        </select>
    );
}

export default ContactSelector;
