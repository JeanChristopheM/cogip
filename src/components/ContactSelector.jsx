function ContactSelector({
  contacts,
  selectedCompany,
  currentContact,
  handleContactChange,
}) {
  return (
    <select
      onChange={(e) => {
        handleContactChange(e.target.value);
      }}
      defaultValue={`${currentContact.firstname} ${currentContact.lastname}`}
    >
      <option value="">
        {selectedCompany == "" ? "Select a company first" : "Select a contact"}
      </option>
      {contacts.map((contact) => {
        if (selectedCompany == "") {
          return;
        } else if (selectedCompany.id == contact.contactcompany) {
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
