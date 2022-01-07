import { useNavigate } from "react-router-dom";
import CompanyLi from "./CompanyLi.jsx";

function Companies({ data }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };
  return (
    <main>
      <section className="companies card">
        <h2>
          Companies
          <i
            className="fas fa-plus-square plusButton"
            id="companyAdd"
            onClick={handleAdd}
          ></i>
        </h2>
        <ul>
          {data.map((entry) => {
            return <CompanyLi company={entry} key={entry.id} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Companies;
