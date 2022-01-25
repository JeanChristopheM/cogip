import CompanyLi from "../reusables/CompanyLi.jsx";

const LastFiveCompanies = ({ handleAdd, navigate, companies }) => {
  return (
    <section className="companies card">
      <h2>
        <span
          onClick={() => {
            navigate("/companies");
          }}
          style={{ cursor: "pointer" }}
        >
          Last 5 companies
        </span>
        <button
          type="button"
          id="companyAdd"
          onClick={handleAdd}
          style={{ padding: "0 .5rem" }}
        >
          +
        </button>
      </h2>
      <ul>
        {companies.length > 0 ? (
          companies.slice(0, 5).map((entry) => {
            return <CompanyLi company={entry} key={entry.id} />;
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

export default LastFiveCompanies;
