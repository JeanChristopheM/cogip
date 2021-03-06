function ContactSelector({
  contacts,
  selectedCompany,
  currentContact,
  handleContactChange,
}) {
  return (
    <select
      onChange={(e) => {
        handleContactChange(
          contacts.find(
            (contact) =>
              `${contact.firstname} ${contact.lastname}` === e.target.value
          )
        );
      }}
      defaultValue={
        currentContact
          ? `${currentContact.firstname} ${currentContact.lastname}`
          : ""
      }
      name="contact"
    >
      <option value="">
        {selectedCompany == "" ? "Select a company first" : "Select a contact"}
      </option>
      {contacts.map((contact) => {
        if (selectedCompany == "") {
          return;
        } else if (selectedCompany.contacts.includes(contact.id)) {
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
