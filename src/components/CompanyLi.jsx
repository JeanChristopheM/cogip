import { useNavigate } from "react-router-dom";

function CompanyLi({ company }) {
  let navigate = useNavigate();
  return (
    <li>
      <span className="svg">
        <i className="fas fa-building"></i>
      </span>
      <span
        className="companyName"
        onClick={() => {
          navigate(`/company/${company.id}`);
        }}
        style={{ cursor: "pointer" }}
      >
        {company.name}
      </span>
      <span className="companyType">{company.status}</span>
    </li>
  );
}

export default CompanyLi;
