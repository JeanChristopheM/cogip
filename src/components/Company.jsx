import { useState } from "react";
import { useParams } from "react-router-dom";
import CompanyControls from "./CompanyControls.jsx";

function Company({ companies }) {
  let params = useParams();
  let company = companies.find((el) => el.id == params.companyId);

  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <main>
      <div className="card">
        <h2>Details about {company.name}</h2>
        <div className="companyGrid">
          <span>Name : </span>
          {isModifying ? (
            <input type="text" name="companyName" placeholder={company.name} />
          ) : (
            <span id="companyName">{company.name}</span>
          )}
          <span>VAT : </span>
          {isModifying ? (
            <input type="number" name="companyVat" placeholder={company.vat} />
          ) : (
            <span id="companyVat">{company.vat}</span>
          )}
          <span>Status : </span>
          {isModifying ? (
            <select name="companyStatus">
              <option value="">Select a status</option>
              <option value="Supplier">Supplier</option>
              <option value="Client">Client</option>
            </select>
          ) : (
            <span id="companyStatus">{company.status}</span>
          )}
        </div>
        <CompanyControls
          isModifying={isModifying}
          isDeleting={isDeleting}
          setIsDeleting={setIsDeleting}
          setIsModifying={setIsModifying}
        />
      </div>
    </main>
  );
}

export default Company;
