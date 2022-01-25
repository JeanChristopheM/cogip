import ContactLi from "../reusables/ContactLi.jsx";
const LastFiveContacts = ({ handleAdd, navigate, contacts, companies }) => {
  return (
    <section className="contacts card">
      <h2>
        <span
          onClick={() => {
            navigate("/contacts");
          }}
          style={{ cursor: "pointer" }}
        >
          Last 5 contacts
        </span>
        <button
          type="button"
          id="contactAdd"
          onClick={handleAdd}
          style={{ padding: "0 .5rem" }}
        >
          +
        </button>
      </h2>
      <ul>
        {contacts.length > 0 ? (
          contacts.slice(0, 5).map((entry) => {
            return (
              <ContactLi contact={entry} key={entry.id} companies={companies} />
            );
          })
        ) : (
          <li>
            <div className="spinner-centerer">
              <div className="lds-dual-ring"></div>
            </div>
          </li>
        )}
      </ul>
    </section>
  );
};

export default LastFiveContacts;
