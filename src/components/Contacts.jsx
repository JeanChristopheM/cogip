import { useNavigate } from "react-router-dom";
import ContactLi from "./ContactLi.jsx";

function Contacts({ data, companies }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };
  return (
    <main>
      <section className="contacts card">
        <h2>
          Contacts
          <i
            className="fas fa-plus-square plusButton"
            id="contactAdd"
            onClick={handleAdd}
          ></i>
        </h2>
        <ul>
          {data.map((entry) => {
            return (
              <ContactLi contact={entry} key={entry.id} companies={companies} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Contacts;
